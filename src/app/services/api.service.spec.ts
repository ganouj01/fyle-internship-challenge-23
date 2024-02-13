import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch repositories for a given username', () => {
    const username = 'ganouj01';
    const mockRepositories = [
      {
        id: 640026582,
        node_id: 'R_kgDOJiYH1g',
        name: 'FoodApp',
        full_name: 'ganouj01/FoodApp',
        private: false,
        owner: {
          login: 'ganouj01',
          id: 87605577,
          node_id: 'MDQ6VXNlcjg3NjA1NTc3',
          avatar_url: 'https://avatars.githubusercontent.com/u/87605577?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/ganouj01',
          html_url: 'https://github.com/ganouj01',
          followers_url: 'https://api.github.com/users/ganouj01/followers',
          following_url:
            'https://api.github.com/users/ganouj01/following{/other_user}',
          gists_url: 'https://api.github.com/users/ganouj01/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/ganouj01/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/ganouj01/subscriptions',
          organizations_url: 'https://api.github.com/users/ganouj01/orgs',
          repos_url: 'https://api.github.com/users/ganouj01/repos',
          events_url: 'https://api.github.com/users/ganouj01/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/ganouj01/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/ganouj01/FoodApp',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/ganouj01/FoodApp',
        forks_url: 'https://api.github.com/repos/ganouj01/FoodApp/forks',
        keys_url: 'https://api.github.com/repos/ganouj01/FoodApp/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/ganouj01/FoodApp/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/ganouj01/FoodApp/teams',
        hooks_url: 'https://api.github.com/repos/ganouj01/FoodApp/hooks',
        issue_events_url:
          'https://api.github.com/repos/ganouj01/FoodApp/issues/events{/number}',
        events_url: 'https://api.github.com/repos/ganouj01/FoodApp/events',
        assignees_url:
          'https://api.github.com/repos/ganouj01/FoodApp/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/ganouj01/FoodApp/branches{/branch}',
        tags_url: 'https://api.github.com/repos/ganouj01/FoodApp/tags',
        blobs_url:
          'https://api.github.com/repos/ganouj01/FoodApp/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/ganouj01/FoodApp/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/ganouj01/FoodApp/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/ganouj01/FoodApp/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/ganouj01/FoodApp/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/ganouj01/FoodApp/languages',
        stargazers_url:
          'https://api.github.com/repos/ganouj01/FoodApp/stargazers',
        contributors_url:
          'https://api.github.com/repos/ganouj01/FoodApp/contributors',
        subscribers_url:
          'https://api.github.com/repos/ganouj01/FoodApp/subscribers',
        subscription_url:
          'https://api.github.com/repos/ganouj01/FoodApp/subscription',
        commits_url:
          'https://api.github.com/repos/ganouj01/FoodApp/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/ganouj01/FoodApp/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/ganouj01/FoodApp/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/ganouj01/FoodApp/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/ganouj01/FoodApp/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/ganouj01/FoodApp/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/ganouj01/FoodApp/merges',
        archive_url:
          'https://api.github.com/repos/ganouj01/FoodApp/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/ganouj01/FoodApp/downloads',
        issues_url:
          'https://api.github.com/repos/ganouj01/FoodApp/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/ganouj01/FoodApp/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/ganouj01/FoodApp/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/ganouj01/FoodApp/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/ganouj01/FoodApp/labels{/name}',
        releases_url:
          'https://api.github.com/repos/ganouj01/FoodApp/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/ganouj01/FoodApp/deployments',
        created_at: '2023-05-12T19:50:02Z',
        updated_at: '2023-05-12T20:02:08Z',
        pushed_at: '2023-05-12T20:02:03Z',
        git_url: 'git://github.com/ganouj01/FoodApp.git',
        ssh_url: 'git@github.com:ganouj01/FoodApp.git',
        clone_url: 'https://github.com/ganouj01/FoodApp.git',
        svn_url: 'https://github.com/ganouj01/FoodApp',
        homepage: null,
        size: 768,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
      },
      {
        id: 745400161,
        node_id: 'R_kgDOLG3nYQ',
        name: 'fyle-proj',
        full_name: 'ganouj01/fyle-proj',
        private: false,
        owner: {
          login: 'ganouj01',
          id: 87605577,
          node_id: 'MDQ6VXNlcjg3NjA1NTc3',
          avatar_url: 'https://avatars.githubusercontent.com/u/87605577?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/ganouj01',
          html_url: 'https://github.com/ganouj01',
          followers_url: 'https://api.github.com/users/ganouj01/followers',
          following_url:
            'https://api.github.com/users/ganouj01/following{/other_user}',
          gists_url: 'https://api.github.com/users/ganouj01/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/ganouj01/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/ganouj01/subscriptions',
          organizations_url: 'https://api.github.com/users/ganouj01/orgs',
          repos_url: 'https://api.github.com/users/ganouj01/repos',
          events_url: 'https://api.github.com/users/ganouj01/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/ganouj01/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/ganouj01/fyle-proj',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/ganouj01/fyle-proj',
        forks_url: 'https://api.github.com/repos/ganouj01/fyle-proj/forks',
        keys_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/ganouj01/fyle-proj/teams',
        hooks_url: 'https://api.github.com/repos/ganouj01/fyle-proj/hooks',
        issue_events_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/issues/events{/number}',
        events_url: 'https://api.github.com/repos/ganouj01/fyle-proj/events',
        assignees_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/branches{/branch}',
        tags_url: 'https://api.github.com/repos/ganouj01/fyle-proj/tags',
        blobs_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/languages',
        stargazers_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/stargazers',
        contributors_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/contributors',
        subscribers_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/subscribers',
        subscription_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/subscription',
        commits_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/ganouj01/fyle-proj/merges',
        archive_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/downloads',
        issues_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/labels{/name}',
        releases_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/ganouj01/fyle-proj/deployments',
        created_at: '2024-01-19T08:56:57Z',
        updated_at: '2024-01-19T09:02:16Z',
        pushed_at: '2024-01-19T09:02:12Z',
        git_url: 'git://github.com/ganouj01/fyle-proj.git',
        ssh_url: 'git@github.com:ganouj01/fyle-proj.git',
        clone_url: 'https://github.com/ganouj01/fyle-proj.git',
        svn_url: 'https://github.com/ganouj01/fyle-proj',
        homepage: null,
        size: 4,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 463524479,
        node_id: 'R_kgDOG6DSfw',
        name: 'horoscopeapp',
        full_name: 'ganouj01/horoscopeapp',
        private: false,
        owner: {
          login: 'ganouj01',
          id: 87605577,
          node_id: 'MDQ6VXNlcjg3NjA1NTc3',
          avatar_url: 'https://avatars.githubusercontent.com/u/87605577?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/ganouj01',
          html_url: 'https://github.com/ganouj01',
          followers_url: 'https://api.github.com/users/ganouj01/followers',
          following_url:
            'https://api.github.com/users/ganouj01/following{/other_user}',
          gists_url: 'https://api.github.com/users/ganouj01/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/ganouj01/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/ganouj01/subscriptions',
          organizations_url: 'https://api.github.com/users/ganouj01/orgs',
          repos_url: 'https://api.github.com/users/ganouj01/repos',
          events_url: 'https://api.github.com/users/ganouj01/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/ganouj01/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/ganouj01/horoscopeapp',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/ganouj01/horoscopeapp',
        forks_url: 'https://api.github.com/repos/ganouj01/horoscopeapp/forks',
        keys_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/ganouj01/horoscopeapp/teams',
        hooks_url: 'https://api.github.com/repos/ganouj01/horoscopeapp/hooks',
        issue_events_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/issues/events{/number}',
        events_url: 'https://api.github.com/repos/ganouj01/horoscopeapp/events',
        assignees_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/branches{/branch}',
        tags_url: 'https://api.github.com/repos/ganouj01/horoscopeapp/tags',
        blobs_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/languages',
        stargazers_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/stargazers',
        contributors_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/contributors',
        subscribers_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/subscribers',
        subscription_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/subscription',
        commits_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/ganouj01/horoscopeapp/merges',
        archive_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/downloads',
        issues_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/labels{/name}',
        releases_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/ganouj01/horoscopeapp/deployments',
        created_at: '2022-02-25T12:29:41Z',
        updated_at: '2022-02-25T12:37:47Z',
        pushed_at: '2022-02-25T12:37:44Z',
        git_url: 'git://github.com/ganouj01/horoscopeapp.git',
        ssh_url: 'git@github.com:ganouj01/horoscopeapp.git',
        clone_url: 'https://github.com/ganouj01/horoscopeapp.git',
        svn_url: 'https://github.com/ganouj01/horoscopeapp',
        homepage: null,
        size: 287,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 640023548,
        node_id: 'R_kgDOJiX7_A',
        name: 'YelpCamp',
        full_name: 'ganouj01/YelpCamp',
        private: false,
        owner: {
          login: 'ganouj01',
          id: 87605577,
          node_id: 'MDQ6VXNlcjg3NjA1NTc3',
          avatar_url: 'https://avatars.githubusercontent.com/u/87605577?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/ganouj01',
          html_url: 'https://github.com/ganouj01',
          followers_url: 'https://api.github.com/users/ganouj01/followers',
          following_url:
            'https://api.github.com/users/ganouj01/following{/other_user}',
          gists_url: 'https://api.github.com/users/ganouj01/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/ganouj01/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/ganouj01/subscriptions',
          organizations_url: 'https://api.github.com/users/ganouj01/orgs',
          repos_url: 'https://api.github.com/users/ganouj01/repos',
          events_url: 'https://api.github.com/users/ganouj01/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/ganouj01/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/ganouj01/YelpCamp',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/ganouj01/YelpCamp',
        forks_url: 'https://api.github.com/repos/ganouj01/YelpCamp/forks',
        keys_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/ganouj01/YelpCamp/teams',
        hooks_url: 'https://api.github.com/repos/ganouj01/YelpCamp/hooks',
        issue_events_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/issues/events{/number}',
        events_url: 'https://api.github.com/repos/ganouj01/YelpCamp/events',
        assignees_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/branches{/branch}',
        tags_url: 'https://api.github.com/repos/ganouj01/YelpCamp/tags',
        blobs_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/languages',
        stargazers_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/stargazers',
        contributors_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/contributors',
        subscribers_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/subscribers',
        subscription_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/subscription',
        commits_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/ganouj01/YelpCamp/merges',
        archive_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/downloads',
        issues_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/labels{/name}',
        releases_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/ganouj01/YelpCamp/deployments',
        created_at: '2023-05-12T19:39:33Z',
        updated_at: '2023-05-12T19:40:14Z',
        pushed_at: '2023-05-12T19:41:35Z',
        git_url: 'git://github.com/ganouj01/YelpCamp.git',
        ssh_url: 'git@github.com:ganouj01/YelpCamp.git',
        clone_url: 'https://github.com/ganouj01/YelpCamp.git',
        svn_url: 'https://github.com/ganouj01/YelpCamp',
        homepage: null,
        size: 11664,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
      },
    ];

    service
      .getRepos({ githubUsername: username, reposPerPage: 10, currentPage: 1 })
      .subscribe((repos) => {
        expect(repos).toEqual(mockRepositories);
      });

    const req = httpMock.expectOne(
      `https://api.github.com/users/${username}/repos?per_page=10&page=1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockRepositories);
  });

  it('should handle error when fetching repositories', () => {
    const username = 'ganouj01';

    service
      .getRepos({ githubUsername: username, reposPerPage: 10, currentPage: 1 })
      .subscribe({
        error: (err) => {
          expect(err).toBeTruthy();
        },
      });

    const req = httpMock.expectOne(
      `https://api.github.com/users/${username}/repos?per_page=10&page=1`
    );
    req.error(new ErrorEvent('Network error'));
  });
});
