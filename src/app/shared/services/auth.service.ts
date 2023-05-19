import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  userAuth() {
    return sessionStorage.getItem('user');
  }
  userStorage(user: any) {
    return sessionStorage.setItem('user', JSON.stringify(user));
  }
  clearStorage() {
    return sessionStorage.clear();
  }
}
