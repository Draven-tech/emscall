import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-login-citizen',
  templateUrl: './login-citizen.page.html',
  styleUrls: ['./login-citizen.page.scss'],
})
export class LoginCitizenPage implements OnInit {
  phone: string = 'test';
  password: string = 'test';


  constructor(private router: Router) {}

  ngOnInit() {
  }

  login() {
    // Dummy login
    if (this.phone && this.password) {
      this.router.navigate(['/dashboard']);
    }
  }

}
