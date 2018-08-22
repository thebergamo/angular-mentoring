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

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }
}
