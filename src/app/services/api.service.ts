import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  githubBaseUrl: string = environment.githubBaseUrl;
  getUser(githubUsername: string) {
    return this.httpClient.get(`${this.githubBaseUrl}/${githubUsername}`);
  }

  getRepos(data: {
    githubUsername: string;
    reposPerPage: number;
    currentPage: number;
  }) {
    return this.httpClient.get(
      `${this.githubBaseUrl}/${data.githubUsername}/repos?per_page=${data.reposPerPage}&page=${data.currentPage}`
    );
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
}
