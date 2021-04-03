import { Injectable } from '@angular/core';
import { LoginService } from './LoginService';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService {

  constructor(private loginService: LoginService, private router: Router) {
   }

   canActivate(route: ActivatedRouteSnapshot): boolean
   {

  //  console.log(route);

     if (this.loginService.isAuthenticated())
     {
       return true;
     } else {
       this.router.navigate(['/login']);
       return false;
     }
   }
}

