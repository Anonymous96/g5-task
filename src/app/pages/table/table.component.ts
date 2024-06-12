import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GithubService } from '../../core/services/github.service';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { GitHubUser } from '../../core/models/user.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SearchBarComponent, RouterModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  users: GitHubUser[] = [];
  private destroy$ = new Subject<void>();

  constructor(private githubService: GithubService) {}

  search(query: string) {
    this.githubService
      .searchUsers(query)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.users = response.items.slice(0, 20);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
