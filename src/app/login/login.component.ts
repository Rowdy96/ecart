import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm : FormGroup  = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
  });

  errorMessage : string = '';

  ngOnInit(): void {
  }

  get f(){
    return this.loginForm.controls;
  }

  constructor(
    private _location: Location, 
    private authService: AuthenticationService,
    private _router: Router
  ) {}

  onSubmit() {
    const { username , password } = this.loginForm.value;
    this.authService.login({ username, password }).subscribe(res=> {
      const { token } = res;
      localStorage.setItem(this.authService.usertoken,token);
      this._router.navigateByUrl('/');
    });
  }

  goBack(){
    this._location.back();
  }
}
