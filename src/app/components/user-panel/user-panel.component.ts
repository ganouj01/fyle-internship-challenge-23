import { Component, Input } from '@angular/core';
import { UserDetails } from 'src/app/types/types';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent {
  @Input() userDetails: UserDetails = {
    username: '',
    gitUrl: '',
    location: '',
    followerCount: 0,
    followingCount: 0,
    publicRepos: 0,
  };
}
