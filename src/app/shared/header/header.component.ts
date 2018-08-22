import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User;

  onLogoutClick(): void {
    this.authService.logout();
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUserInfo();
  }

}
