import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Personnel } from '../../core/models/personnel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { PersonnelEditComponent } from './personnel-edit.component';
import { PersonnelService } from '../../core/services/personnel.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {

  personnel: Personnel[] = [];
  filteredItems: Personnel[] = [];

  // paging
  p = 1;
  // filter panel
  open = true;

  filterName: string;
  filterAddress: string;

  constructor(private personnelService: PersonnelService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.personnelService.getPersonnel().subscribe((data) => {
      this.personnel = Object.keys(data).map((key) => data[key]);
      this.filteredItems = this.personnel;
    },
      (error) => {
        console.log(error);
      });
  }

  searchButtonClick() {
    if (this.filterName || this.filterAddress) {
      this.filteredItems.filter(person => {
        let nameKeys, addressKeys, name, address;
        if (this.filterName) {
          nameKeys = this.filterName.split(' ');
          name = person.name + ' ' + person.surname;
        }
        if (this.filterAddress) {
          addressKeys = this.filterAddress.split(' ');
          address = person.address.address + ' ' + person.address.city;
        }
        if ((addressKeys.length === 0 || addressKeys.some(element => address.includes(element))) &&
          (nameKeys.length === 0 || nameKeys.some(element => name.includes(element)))) {
          return true;
        }
        return false;
      });
    }
  }

  clearFilter() {
    this.filterAddress = undefined;
    this.filterName = undefined;
    this.filteredItems = this.personnel;
  }

  add() {
    const modal = this.modalService.open(PersonnelEditComponent, { size: 'lg' });
    modal.componentInstance.model = new Personnel();

    modal.result.then((result) => {
      this.personnelService.addPersonnel(result);
    }, (reason) => {
    });
  }

  update(personnel: Personnel) {
    const modal = this.modalService.open(PersonnelEditComponent, { size: 'lg' });
    modal.componentInstance.model = personnel;

    modal.result.then((result) => {
      this.personnelService.update(result);
    }, (reason) => {
    });
  }
}
