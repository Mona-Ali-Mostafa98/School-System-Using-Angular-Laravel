import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean = false;

  login(username:string, password:string) {
    localStorage.setItem('username', username);
    this.isLoggedIn = true
  }

  constructor() { }
}
