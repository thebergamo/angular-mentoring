import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { User } from '../user.interface';
import { AuthService } from '../auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User;

  onLogoutClick(): void {
    this.authService.logout();
    this.user = null;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this
          .authService
          .getUserInfo()
          .subscribe(
            (user: User) => this.user = user,
            console.error,
          );
      });
  }

}
