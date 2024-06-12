import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IResponse } from '../models/IResponse.mode';
import { GitHubUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  API_URL = environment.serverUrl;

  constructor(private http: HttpClient) {}

  searchUsers(query: string): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.API_URL}/search/users?q=${query}`);
  }

  getUserDetails(username: string | null): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(`${this.API_URL}/users/${username}`);
  }
}
