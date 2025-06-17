import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  phone: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Dummy login
    if (this.phone && this.password) {
      this.router.navigate(['/dashboard']);
    }
  }
}
