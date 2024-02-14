import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelComponent } from './user-panel.component';

describe('UserPanelComponent', () => {
  let component: UserPanelComponent;
  let fixture: ComponentFixture<UserPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPanelComponent],
    });
    fixture = TestBed.createComponent(UserPanelComponent);
    component = fixture.componentInstance;
    component.userDetails = {
      followerCount: 10,
      followingCount: 50,
      gitUrl: 'https://github.com/ganouj01',
      location: 'Mumbai, IN',
      publicRepos: 4,
      username: 'ganouj01',
      avatarUrl: 'https://avatars.githubusercontent.com/u/87605577?v=4',
      bio: 'Lets get started!',
      fullName: 'Anuj Gawde',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user avatar', () => {
    const avatarElement = fixture.nativeElement.querySelector('.user-avatar');
    expect(avatarElement.src).toBe(
      'https://avatars.githubusercontent.com/u/87605577?v=4'
    );
  });

  it('should display username', () => {
    const usernameElement = fixture.nativeElement.querySelector('.username');
    expect(usernameElement.textContent).toContain('ganouj01');
  });

  it('should display user bio', () => {
    const bioElement = fixture.nativeElement.querySelector('.user-bio');
    expect(bioElement.textContent).toContain('Lets get started!');
  });

  it('should display user location if available', () => {
    const locationElement =
      fixture.nativeElement.querySelector('.user-location');
    expect(locationElement.textContent).toContain('Mumbai, IN');
  });

  it('should display user git URL', () => {
    const gitUrlElement = fixture.nativeElement.querySelector('.user-git-url');
    expect(gitUrlElement.href).toBe('https://github.com/ganouj01');
    expect(gitUrlElement.textContent).toContain('https://github.com/ganouj01');
  });

  it('should display following count', () => {
    const followingCountElement =
      fixture.nativeElement.querySelector('.following-count');
    expect(followingCountElement.textContent).toContain('50');
  });

  it('should display follower count', () => {
    const followerCountElement =
      fixture.nativeElement.querySelector('.follower-count');
    expect(followerCountElement.textContent).toContain('10');
  });

  it('should display public repositories count', () => {
    const publicReposElement = fixture.nativeElement.querySelector(
      '.public-repos-count'
    );
    expect(publicReposElement.textContent).toContain('4');
  });
});
