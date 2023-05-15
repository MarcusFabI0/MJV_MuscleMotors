import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate(): boolean {
    const userStorage = sessionStorage.getItem('user');
    if (userStorage) return true;
    this.router.navigateByUrl('/login')
    return false;
  }

}
