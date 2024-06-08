import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  loginWithEmail() {
    this.authService
      .loginWithEmail(this.email, this.password)
      .then(() => {
        this.router.navigate(['/blocks']);
      })
      .catch((error) => {
        console.error('Login error: ', error);
      });
  }

  loginWithGitHub() {
    this.authService
      .loginWithGitHub()
      .then(() => {
        this.router.navigate(['/blocks']);
      })
      .catch((error) => {
        console.error('Login error: ', error);
      });
  }
}
