import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ApiService } from './services/api.service';
import { UserDetails } from './types/types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  githubResponseStatus: string = '';
  // Validate User
  isValidUser: boolean = false;
  // Fetch repositories parameters.
  @Input() githubUsername: string = '';
  reposPerPage: number = 10;
  currentPage: number = 1;
  loadingRepos: boolean = false;

  // User's public repositories.
  publicRepositories: Array<any> = [];
  userDetails: UserDetails = {
    username: '',
    bio: '',
    gitUrl: '',
    avatarUrl: '',
    location: '',
    fullName: '',
    followerCount: 0,
    followingCount: 0,
    publicRepos: 0,
  };

  // Values for no. of repos to be displayed per page
  dummyItems: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  selectedRepoCount: number = 10;

  // Pagination
  totalObjects: number = 0; // Total number of objects in the array
  visiblePages = 5; // Number of visible pagination links

  get totalPages(): number {
    return Math.ceil(this.totalObjects / this.reposPerPage);
  }

  get startPage(): number {
    let start = this.currentPage - Math.floor(this.visiblePages / 2);
    start = Math.max(start, 1);
    let end = start + this.visiblePages - 1;
    if (end > this.totalPages) {
      end = this.totalPages;
      start = Math.max(end - this.visiblePages + 1, 1);
    }
    return start;
  }

  get endPage(): number {
    let start = this.startPage;
    return Math.min(start + this.visiblePages - 1, this.totalPages);
  }

  get paginationNumbers(): number[] {
    return Array(this.endPage - this.startPage + 1)
      .fill(0)
      .map((x, i) => this.startPage + i);
  }

  navigateToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.fetchUserRepos();
    }
  }

  goToPreviousPage(): void {
    this.navigateToPage(this.currentPage - 1);
    this.fetchUserRepos();
  }

  goToNextPage(): void {
    this.navigateToPage(this.currentPage + 1);
    this.fetchUserRepos();
  }

  handleSearchValue(username: string) {
    this.githubUsername = username;
  }
  handleSelectionChange(reposCount: number) {
    this.reposPerPage = reposCount;
  }

  ngOnInit() {}

  fetchUser() {
    this.apiService
      .getUser(this.githubUsername)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            console.error('404 Error occurred:', error);
            this.isValidUser = false;
            this.loadingRepos = false;
            this.publicRepositories = [];
            this.githubResponseStatus = 'No User Found';
          }
          return throwError(error);
        })
      )
      .subscribe((data: any) => {
        if (data) {
          this.githubResponseStatus = '';
          this.totalObjects = data.public_repos;
          this.userDetails = {
            username: data.login,
            bio: data.bio,
            gitUrl: data.html_url,
            avatarUrl: data.avatar_url,
            location: data.location,
            fullName: data.name,
            followerCount: data.followers,
            followingCount: data.following,
            publicRepos: data.public_repos,
          };
          this.isValidUser = true;
        } else {
          this.isValidUser = false;
        }
      });

    this.fetchUserRepos();
  }
  fetchUserRepos() {
    this.loadingRepos = true;
    this.apiService
      .getRepos({
        githubUsername: this.githubUsername,
        reposPerPage: this.reposPerPage,
        currentPage: this.currentPage,
      })
      .subscribe((data: any) => {
        if (!data.length) {
          this.githubResponseStatus = 'No Public Repositories';
        } else {
          this.githubResponseStatus = '';
        }
        this.publicRepositories = data;
        this.loadingRepos = false;
      });
  }
}
