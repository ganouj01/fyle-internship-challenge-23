import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.scss'],
})
export class GithubCardComponent {
  constructor(private router: Router) {}
  @Input() repository: any;

  navigateToRepo(url: string): void {
    window.location.href = url;
  }
}
