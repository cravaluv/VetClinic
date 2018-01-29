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

  logon(username, password): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(username + ':' + password));
    const header2 = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    // const body = 'username=' + username + '&password=' + password;
    const params = new HttpParams().set('username', username).set('password', password);
    return this.http.get(this.serviceUrl, { headers: header2, params: params}).map((result) => {
      // sessionStorage.setItem('logon', 'true');
      // let role;
      // !result.role ? role = result.role ? role = "customer";
      // sessionStorage.setItem('role', role);
    });
    // .map((res: LogonData) => {
    //   this.saveToken(res)
    //   if (this.redirectUrl) { this.router.navigate([this.redirectUrl]) } else {
    //     this.router.navigate([''])
    //   }
    // })
  }

  getAuthorizationHeader(): string {
    return '';
  }

  isLoggedOn(): boolean {
    const isLogged = sessionStorage.getItem('logon');
    return isLogged === 'true' ? true : false;
  }

  getRole(): string {
    const role = sessionStorage.getItem('role');
    return role;
  }

}

