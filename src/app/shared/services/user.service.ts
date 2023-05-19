import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'http://localhost:3000';

  options = {
    headers: {
      'content-type': 'application/json',
    },
  };

  users: Array<User> = [];
  constructor(private http: HttpClient) {}

  //GET para o Login
  loginRequest(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + `/registeredUsers`, this.options)
      .pipe(delay(2500));
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(
      this.baseUrl + `/registeredUsers`,
      this.options
    );
  }

  //POST
  userRegister(user: Partial<User>) {
    return this.http
      .post(this.baseUrl + `/registeredUsers`, user, this.options)
      .pipe(delay(2500));
  }
}
