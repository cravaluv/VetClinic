import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (!this.auth.isLoggedOn() || route.data.expectedRole !== this.auth.getRole()) {
    //   this.router.navigate(['login']);
    //   return false;
    // } else {
    //   return false;
    // }
    return true;
  }

}
