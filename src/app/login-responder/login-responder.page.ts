import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-login-responder',
  templateUrl: './login-responder.page.html',
  styleUrls: ['./login-responder.page.scss'],
})
export class LoginResponderPage implements OnInit {
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
