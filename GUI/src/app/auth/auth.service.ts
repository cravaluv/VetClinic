import { Injectable, Injector } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  redirectUrl: string;

  private serviceUrl;

  constructor(private router: Router, private http: HttpClient) {
  }

  login(username, password): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(username + ':' + password));
    const header2 = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    // const body = 'username=' + username + '&password=' + password;
    const params = new HttpParams().set('username', username).set('password', password);
    return this.http.get(this.serviceUrl, { headers: header2, params: params}).map((result) => {
      // sessionStorage.setItem('login', 'true');
      // let role;
      // !result.role ? role = result.role ? role = "customer";
      // sessionStorage.setItem('role', role);
    });
  }

  getAuthorizationHeader(): string {
    return '';
  }

  isLoggedOn(): boolean {
    const isLogged = sessionStorage.getItem('login');
    return isLogged === 'true' ? true : false;
  }

  getRole(): string {
    const role = sessionStorage.getItem('role');
    return role;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  changePassword(login: string, oldPassword: string, newPassword: string) {
    const headers = new HttpHeaders().set('Authorization', 'Basic ');
    const header2 = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    // const body = 'username=' + username + '&password=' + password;
    const params = new HttpParams().set('login', login).set('oldPassword', oldPassword).set('newPassword', newPassword);
    return this.http.get(this.serviceUrl, { headers: header2, params: params}).map((result) => {
      // sessionStorage.setItem('login', 'true');
      // let role;
      // !result.role ? role = result.role ? role = "customer";
      // sessionStorage.setItem('role', role);
    });
  }

}

