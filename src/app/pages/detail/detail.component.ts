import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GithubService } from '../../core/services/github.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  user: any;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.githubService
      .getUserDetails(username)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.user = response;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
