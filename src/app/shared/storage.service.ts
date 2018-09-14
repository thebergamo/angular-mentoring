import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private localStorage: any = window.localStorage;

  constructor() { }

  addItem(key: string, value: string): void {
    this.localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    return this.localStorage.getItem(key);
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }
}
