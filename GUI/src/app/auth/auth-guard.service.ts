import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const url: string = state.url;
    // if (url === '/login') {
    //   if (this.auth.isLoggedOn()) {
    //     this.router.navigate(['']);
    //     return false;
    //   } else { return true; }
    // } else {
    //   if (!this.auth.isLoggedOn()) {
    //     this.router.navigate(['login']);
    //     return false;
    //   } else { return true; }
    // }
    return true;
  }
}
