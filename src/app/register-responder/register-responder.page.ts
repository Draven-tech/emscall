import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-register-responder',
  templateUrl: './register-responder.page.html',
  styleUrls: ['./register-responder.page.scss'],
})
export class RegisterResponderPage implements OnInit {
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
