import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { repeatPasswordValidator } from '../custom-validators/repeat-password.validator';
import { AuthenticationService } from '../authentication.service';
import { SignUpData } from '../models/signup.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    username: new FormControl('',[
      Validators.minLength(5),
      Validators.required
    ]),
    name: new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    }),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    repeatPassword: new FormControl('',[Validators.required]),
    address: new FormGroup({
      city: new FormControl('',[Validators.required]),
      street: new FormControl('',[Validators.required]),
      zipcode: new FormControl('',[Validators.required]),
      number: new FormControl(0)
    }),
    phone: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10)
    ])
  },{ validators: repeatPasswordValidator });

  get f() {
    return this.signUpForm.controls;
  }

  get nameFormControls (){
    return this.signUpForm.get('name');
  }

  get addressFormControls (){
    return this.signUpForm.get('address');
  }

  constructor(
    private _location: Location,
    private _authService: AuthenticationService,
    private _router: Router
  ){

  }

  onSubmit(){
    const { email , username, name, password, address, phone } = this.signUpForm.value;
    const nameValue = {
      firstname: name?.firstname || '',
      lastname: name?.lastname || ''
    }
    const addressValue = {
      city: address?.city || '',
      street: address?.street || '',
      number: 0,
      zipcode: address?.zipcode || '',
      geolocation: {
        lat : '-37.3159',
        long : '81.1496'
      }
    }
    const userData = new SignUpData(email! , username!, password!, nameValue, addressValue, phone!)
    this._authService.signUp(userData).subscribe(res => {
      if(res){
        this._router.navigateByUrl('/login')
      }
    })
  }

  goBack(){
    this._location.back();
  }
}
