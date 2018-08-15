import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { StorageService } from './storage.service';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }

  login(email: string, password: string): User {
    const user = new UserModel({ id: 1, firstName: 'Mr.', lastName: 'Awesome' });

    this.storageService.addItem('loggedUser', user);

    return user;
  }

  logout(): void {
    this.storageService.removeItem('loggedUser');
  }

  isAuthenticated(): boolean {
    const user: User = this.storageService.getItem('loggedUser');

    return !!user;
  }

  getUserInfo(): User {
    return this.storageService.getItem('loggedUser');
  }
}
