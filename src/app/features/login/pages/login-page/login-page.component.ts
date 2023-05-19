import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../../../shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

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


  constructor(private router: Router, private userService: UserService, private authService: AuthService) { }

userLogin() {
    this.buttonLoading = true;
    return this.userService.loginRequest().subscribe(res => {
      const user = res.find((user: any) => {
        return user.email === this.formLogin.value.email && user.password === this.formLogin.value.password
      })
      if (user) {
        this.authService.userStorage(user)
        this.router.navigateByUrl('/cars')
      }
      else {
        this.buttonLoading = false;
        this.error = true;
        this.formLogin.reset();
      }
    })
  }
}