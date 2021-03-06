import { Injectable } from '@angular/core';
import { IEmployee } from '../API-entities/employee';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  user: IEmployee
  constructor() {
    this.user = this.getLocalObject('user');
  }

  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  setLocalObject(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalObject(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeLocalObject(item: string) {
    localStorage.removeItem(item);
  }
}
