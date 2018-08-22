import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { User } from './shared/user.interface';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng Courses';
  public isAuthenticated = false;
  public loggedUser: User;
  public newCourse = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.loggedUser = this.authService.getUserInfo();
  }

  login({ email, password }) {
    this.authService.login(email, password);
    this.loggedUser = this.authService.getUserInfo();
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  logout($event) {
    this.authService.logout();
    this.isAuthenticated = false;
    this.loggedUser = null;
  }
}
