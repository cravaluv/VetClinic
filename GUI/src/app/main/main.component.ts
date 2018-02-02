import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/services/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthService } from '../auth/auth.service';
import { Owner } from '../core/models/owner';
import { Personnel } from '../core/models/personnel';
import { AddVisitComponent } from './add-visit/add-visit.component';
import { CustomerComponent } from './customer/customer.component';
import { OwnerService } from '../core/services/owner.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})

export class MainComponent implements OnInit {

  title = 'app';

  profile: Owner | Personnel;
  role: string;

  constructor(private commonService: CommonService, private modalService: NgbModal,
      public authService: AuthService, private ownerSevice: OwnerService) {

  }

  ngOnInit(): void {
    this.authService.getProfileInformation().subscribe((data) => {
      this.profile = this.authService.profile;
      (this.profile as Personnel).role ? this.role = (this.profile as Personnel).role.name : this.role = 'Klient';
    });
  }

  openDictionary(dictionaryType: 'MEDICINES' | 'COLORS' | 'DISEASTERS' | 'ANIMAL_TYPES' | 'VISIT_TYPES') {
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

  makeReservation() {
    this.ownerSevice.getOwnerAnimals(this.authService.getUserId()).subscribe(data => {
      const animals = Object.keys(data).map((key) => {
        // Formatowanie daty string => Date
        data[key].birthDate = new Date(data[key].birthDate);
        return data[key];
      });
      const modal = this.modalService.open(AddVisitComponent, { size: 'lg' });
      modal.componentInstance.animals = animals;
      modal.result.then((result) => {
      }, (reason) => {
      });
    });
  }

  myData() {
    const modal = this.modalService.open(CustomerComponent, { size: 'lg' });
    modal.result.then((result) => {
    }, (reason) => {
    });
  }

}
