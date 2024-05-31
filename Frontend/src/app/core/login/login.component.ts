import { Component, inject } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(public  authService:AuthService, public router:Router) {}
  username: string = '';
  password: string = '';
  login(username: string, password: string){
    this.authService.login(this.username, this.password);
    this.router.navigateByUrl('/home')
  }
}
