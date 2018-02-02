import { Component, ViewChild, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent {

  submitted = false;
  busy = false;
  loginError = false;
  errorMessage = '';

  @ViewChild('changePasswordForm') form: any;
  oldPassword = '';
  newPassword = '';
  repeatPassword = '';

  // @Input() profile: UserProfile;

  constructor(
    public activeModal: NgbActiveModal,
    private authService: AuthService,
  ) { }


  saveNewPassword() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.busy = true;
    this.loginError = false;
    this.authService.changePassword(this.authService.profile.login, this.oldPassword, this.newPassword)
      .subscribe(
      () => {
        this.busy = false;
        this.activeModal.close();
      }, (error) => {
        this.busy = false;
        this.loginError = true;
        this.errorMessage = 'Nieprawidłowe dane';
      });
  }
}
