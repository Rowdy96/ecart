import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    zipcode: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(private _location: Location){

  }

  onSubmit(){
    console.log(this.signUpForm.value)
  }

  goBack(){
    this._location.back();
  }
}
