export interface UserDetails {
  username: string;
  bio?: string;
  gitUrl: string;
  avatarUrl?: string;
  location: string;
  fullName?: string;
  followerCount: number;
  followingCount: number;
  publicRepos: number;
}
