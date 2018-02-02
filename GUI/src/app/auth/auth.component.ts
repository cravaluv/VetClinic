import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {

  login: string;
  password: string;
  busy = false;

  constructor(private authService: AuthService) {

  }

  logIn() {
    this.busy = true;
    this.authService.login(this.login, this.password).subscribe(
      data => {
        this.busy = false;
      },
      error => {
        this.busy = false;
      });
}
  }

}
