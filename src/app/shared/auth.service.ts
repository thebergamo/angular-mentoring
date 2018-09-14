import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { StorageService } from './storage.service';
import { UserModel } from './user.model';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { AlertService } from './alert.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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
  ) { }

  login(login: string, password: string): void {
    this
      .apiService
      .create<{ token: string }>('auth/login', { login, password })
      .subscribe(
        ({ token } = { token: null }) => {
          this.storageService.addItem('token', token);

          this.router.navigate([this.redirectUrl]);
        },
        () => this.alertService.error('Email or Password do not match with our records. Please check it and try again.'),
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
