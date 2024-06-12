import { GitHubUser } from './user.model';

export type IResponse = {
  incomplete_results: false;
  items: GitHubUser[];
  total_count: number;
};
