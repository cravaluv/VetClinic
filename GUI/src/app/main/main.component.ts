import { Component } from '@angular/core';
import { CommonService } from '../core/services/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})

export class MainComponent {
  title = 'app';

  constructor(private commonService: CommonService, private modalService: NgbModal, private authService: AuthService) {

  }

  openDictionary(dictionaryType: 'MEDICINES' | 'COLORS' | 'DISEASTERS' | 'ANIMAL_TYPES' | 'VISIT_TYPES') {
    // let animalToShow: Animal;
    // this.visitService.getAnimalByVisitId(id).subscribe((data) => {
    //   animalToShow = data as Animal;
    const modal = this.modalService.open(DictionaryComponent, { size: 'lg' });
    modal.componentInstance.mode = dictionaryType;

    modal.result.then((result) => {
    }, (reason) => {
    });
  // });
  }

  changePassword() {
    const modal = this.modalService.open(ChangePasswordComponent, { size: 'lg' });
    modal.result.then((result) => {
    }, (reason) => {
    });
  // });
  }

  logout() {
    this.authService.logout();
  }

}
