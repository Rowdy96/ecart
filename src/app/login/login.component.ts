import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private _location: Location) {}

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  goBack(){
    this._location.back();
  }
}
