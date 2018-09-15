import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { StorageService } from './storage.service';
import { UserModel } from './user.model';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { AlertService } from './alert.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromUser from '../reducers/user';
import { Login } from '../actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public redirectUrl = '';
  public userInfo: User;

  constructor(
    private storageService: StorageService,
    private router: Router,
    private apiService: ApiService,
    private alertService: AlertService,
    private store: Store<fromUser.State>
  ) { }

  login(login: string, password: string, redirectUrl: string): Observable<string  | null> {
    return this
      .apiService
      .create<{ token: string }>('auth/login', { login, password })
      .pipe(
        map(({ token }) => {
          this.storageService.addItem('token', token);

          this.router.navigate([redirectUrl || '']);

          return token;
        }),
        catchError((err): Observable<string> => {
          console.error(err);
          this.alertService.error('Email or Password do not match with our records. Please check it and try again.')
          return of();
        }),
      );

  }

  logout(): void {
    this.storageService.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token: string = this.storageService.getItem('token');

    return !!token;
  }

  getUserInfo(): Observable<User> {
    if (this.getToken() && !this.userInfo) {
      return this
        .apiService
        .read('auth', 'userInfo')
        .pipe(
          map((userInfo: any) => {
            this.userInfo = new UserModel({
              id: userInfo.id,
              firstName: userInfo.name.first,
              lastName: userInfo.name.last
            });

            return this.userInfo;
          }),
        );
    }

    return of(this.userInfo);
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  getToken(): string {
    return this.storageService.getItem('token');
  }
}
