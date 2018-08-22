import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email = '';
  public password = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLoginClick(): void {
    this.authService.login(this.email, this.password);
  }

}
