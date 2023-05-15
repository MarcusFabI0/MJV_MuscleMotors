import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../../../shared/services/user.service';


@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
error? = false;
buttonLoading = false;
formRegister = new FormGroup ({
  name: new FormControl('', {nonNullable: true, validators:[Validators.required]}),
  surname: new FormControl('', {nonNullable: true, validators:[Validators.required]}),
  phone: new FormControl('', {nonNullable: true, validators:Validators.compose([Validators.required,Validators.pattern(/^(\([0-9]{2}\)\s?[0-9]{4,5}-?[0-9]{3,4})|([0-9]{10,11})|([0-9]{2}\s?[0-9]{8,9})$/)])}),
  email:new FormControl('', {nonNullable: true, validators:Validators.compose([Validators.required,Validators.email])}),

  password: new FormControl('', {nonNullable: true, validators:Validators.compose([Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")])}),

  birth: new FormControl<Date>(new Date(),{nonNullable: false, validators:Validators.compose([Validators.required])}),
})

constructor (private router: Router, private userService:UserService) {}

signUp() {
  const formValue = this.formRegister.value;
  if(this.formRegister.valid){
    this.userService.userRegister({
      name: formValue.name,
      surname: formValue.surname,
      phone: formValue.phone,
      email: formValue.email,
      password:formValue.password,
      birth: formValue.birth!
      }).subscribe((res) => {
      console.log(formValue);
      this.router.navigateByUrl('/login');
    });
  }
  else{

  }
}
}
