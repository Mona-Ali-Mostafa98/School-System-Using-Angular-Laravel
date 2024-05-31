import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../_services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  if(authService.isLoggedIn){
    return true
  }

  let router = inject(Router);
  router.navigateByUrl('/login');
  return false;
};
