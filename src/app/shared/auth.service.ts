import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { StorageService } from './storage.service';
import { UserModel } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public redirectUrl = '';

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  login(email: string, password: string): void {
    const user = new UserModel({ id: 1, firstName: 'Mr.', lastName: 'Awesome' });

    this.storageService.addItem('loggedUser', user);

    this.router.navigate([this.redirectUrl]);
  }

  logout(): void {
    this.storageService.removeItem('loggedUser');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const user: User = this.storageService.getItem('loggedUser');

    return !!user;
  }

  getUserInfo(): User {
    return this.storageService.getItem('loggedUser');
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
