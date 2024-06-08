import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  API_URL = environment.serverUrl;

  constructor(private http: HttpClient) {}

  searchUsers(query: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/search/users?q=${query}`);
  }

  getUserDetails(username: string | null): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/users/${username}`);
  }
}
