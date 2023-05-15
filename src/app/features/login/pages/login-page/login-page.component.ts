import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../../../shared/services/user.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  error?= false;
  buttonLoading = false;
  formLogin = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required,Validators.email])),
    password: new FormControl('', [Validators.required])
  });


  constructor(private router: Router, private userService: UserService) { }

userLogin() {
    this.buttonLoading = true;
    return this.userService.loginRequest().subscribe(res => {
      const user = res.find((user: any) => {
        return user.email === this.formLogin.value.email && user.password === this.formLogin.value.password
      })
      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user))
        this.router.navigateByUrl('cars')
      }
      else {
        this.buttonLoading = false;
        this.error = true;
        this.formLogin.reset();
      }
    })
  }
}























  // (ngSubmit)="userLogin()"
