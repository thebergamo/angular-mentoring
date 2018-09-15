import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AuthService } from '../shared/auth.service';
import { Login, SetUserInfo } from '../actions/user.actions';

import * as fromUser from '../reducers/user';
import { User } from '../shared/user.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email = '';
  public password = '';

  constructor(
    private authService: AuthService,
    private store: Store<fromUser.State>
  ) { }

  ngOnInit() {
  }

  onLoginClick(): void {
    this.store.pipe(
      select(fromUser.getRedirectUrl),
    )
    .subscribe(
      (redirectUrl) => {
        this
          .authService
          .login(this.email, this.password, redirectUrl)
          .subscribe(
            (token) => {
              this.store.dispatch(new Login(token));
              console.log({ token });

              this
                .authService
                .getUserInfo()
                .subscribe(
                  (user: User) => this.store.dispatch(new SetUserInfo(user)),
                );
            },
          );
      });
  }

}
