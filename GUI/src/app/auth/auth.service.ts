import { Injectable, Injector } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { Personnel } from '../core/models/personnel';
import { Owner } from '../core/models/owner';

@Injectable()
export class AuthService {

  redirectUrl: string;

  profile: Owner | Personnel;

  private serviceUrl = 'http://localhost:8080/auth/';

  constructor(private router: Router, private http: HttpClient) {
  }

  login(login, password): Observable<void> {
    return this.http.post(this.serviceUrl + 'login', {'login': login, 'password': password}).map((result) => {
      const profile = result as Owner | Personnel;
      sessionStorage.setItem('login', 'true');
      (profile as Personnel).role ? sessionStorage.setItem('role', (profile as Personnel).role.name) :
        sessionStorage.setItem('role', 'customer');
        this.setUserId(profile);
        this.router.navigate(['']);
    });
  }

  getAuthorizationHeader(): string {
    return btoa('veterinary' + ':' + 'clinic');
  }

  isLoggedIn(): boolean {
    const isLogged = sessionStorage.getItem('login');
    return isLogged === 'true' ? true : false;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  changePassword(login: string, oldPassword: string, newPassword: string) {
    return this.http.post(this.serviceUrl + 'login',
        {'login': login, 'password': oldPassword, 'newPassword': newPassword});
  }

  getProfileInformation() {
    let url;
    if (this.getUserRole() === 'customer') {
      url = 'http://localhost:8080/owners/' + this.getUserId();
    } else {
      url = 'http://localhost:8080/personnel/' + this.getUserId();
    }
    return this.http.get(url).map((result) => {
      this.profile = result as Owner | Personnel;
    });
  }

  setUserId(user: Owner | Personnel) {
    sessionStorage.setItem('profileId', this.getUserRole() === 'customer' ? (user as Owner).idOwner.toString() :
      (user as Personnel).idPersonnel.toString());
  }

  getUserId(): string {
    return sessionStorage.getItem('profileId');
  }

  getUserRole(): string {
    return sessionStorage.getItem('role');
  }

  getProfileLogin() {
    return this.profile.login;
  }

}

