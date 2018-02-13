import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Personnel } from '../../core/models/personnel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { PersonnelEditComponent } from './personnel-edit.component';
import { PersonnelService } from '../../core/services/personnel.service';
import { CommonService } from '../../core/services/common.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html'
})
export class PersonnelComponent implements OnInit {

  personnel: Personnel[] = [];
  filteredItems: Personnel[] = [];

  // paging
  p = 1;
  // filter panel
  open = false;

  busy = true;
  selected: Personnel;

  filterName: string;
  filterAddress: string;

  constructor(private personnelService: PersonnelService, private modalService: NgbModal, private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.getPersonnel();
  }

  add() {

    this.commonService.getDictionary('ROLES').subscribe(data => {
      const roles = Object.keys(data).map((key) => data[key]);
      const modal = this.modalService.open(PersonnelEditComponent, { size: 'lg' });
      modal.componentInstance.roles = roles;
      modal.componentInstance.editMode = false;

      modal.result.then((result) => {
        this.getPersonnel();
      }, (reason) => {
      });
    },
      (error) => {
        console.log(error);
      });
  }

  update(personnel: Personnel) {
      const modal = this.modalService.open(PersonnelEditComponent, { size: 'lg' });
      modal.componentInstance.model = personnel;

      modal.result.then((result) => {
        this.personnelService.update(result);
        this.getPersonnel();
      }, (reason) => {
      });
  }

  delete() {
    this.personnelService.delete(this.selected.idPersonnel).subscribe(() => {
      this.getPersonnel();
      this.selected = undefined;
    });
  }

  getPersonnel() {
    this.busy = true;
    this.personnelService.getPersonnel().subscribe((data) => {
      this.personnel = Object.keys(data).map((key) => data[key]);
      this.filteredItems = this.personnel;
      this.busy = false;
    },
      (error) => {
        console.log(error);
        this.busy = false;
      });
  }
}
