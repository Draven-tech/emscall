import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-register-citizen',
  templateUrl: './register-citizen.page.html',
  styleUrls: ['./register-citizen.page.scss'],
})
export class RegisterCitizenPage implements OnInit {
  name: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
  }

  register() {
    if (this.password === this.confirmPassword) {
      // Simulate success
      this.router.navigate(['/dashboard']);
    }
  }

}
