import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private localStorage: any = window.localStorage;

  constructor() { }

  addItem(key: string, item: any): void {
    const value = JSON.stringify(item);
    this.localStorage.setItem(key, value);
  }

  getItem(key: string): any {
    const item = this.localStorage.getItem(key);

    console.log({ key, item });

    if (!item) { return; }

    return JSON.parse(item);
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }
}
