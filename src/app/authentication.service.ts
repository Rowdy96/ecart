import { Injectable } from '@angular/core';
import { SignUpData } from './models/signup.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiEndPoint = 'https://fakestoreapi.com/';

  usertoken = 'user-token'

  get isLoggedIn(){
    return localStorage.getItem(this.usertoken);
  }

  constructor(private http: HttpClient) { }

  login(signinData: { username: string, password: string}): Observable<{ token: string }>{
    const url = this.apiEndPoint + 'auth/login';
    return this.http.post<{ token: string }>(url,signinData);
  }

  logout(){
    localStorage.removeItem(this.usertoken);
  }

  signUp(userData: SignUpData): Observable<SignUpData>{
    const url = this.apiEndPoint + 'users';
    return this.http.post<SignUpData>(url,userData);
  }

  updateProfile(){
  }
}
