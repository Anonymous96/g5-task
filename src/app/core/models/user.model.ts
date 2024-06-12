export interface GitHubUser {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
  bio?: string | null;
  blog?: string;
  company?: string | null;
  created_at?: string;
  email?: string | null;
  followers?: number;
  following?: number;
  hireable?: string | null;
  location?: string | null;
  name?: string;
  public_gists?: number;
  public_repos?: number;
  twitter_username?: string | null;
  updated_at?: string;
}