import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GithubService } from '../../core/services/github.service';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, RouterModule],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css',
})
export class BlocksComponent {
  users: any[] = [];
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
