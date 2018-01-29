import { Component } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Owner } from '../../core/models/owner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { OwnerEditComponent } from './owner-edit.component';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  owners: Owner[] = [];
  selected: Owner;

  filteredItems: Owner[];

  // paging
  p = 1;

  // filter panel
  open = true;

  filterName: string;
  filterAddress: string;


  constructor(private ownerService: OwnerService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getOwners();
  }

  add() {
    const modal = this.modalService.open(OwnerEditComponent, { size: 'lg' });
    modal.componentInstance.editMode = false;

    modal.result.then((result) => {
      this.ownerService.addOwner(result);
      this.getOwners();
    }, (reason) => {
    });
  }

  onSelect(owner: Owner) {
    this.selected = owner;
  }

  update(owner: Owner) {
    const modal = this.modalService.open(OwnerEditComponent, { size: 'lg' });
    modal.componentInstance.model = owner;

    modal.result.then((result) => {
      this.ownerService.update(result);
      this.getOwners();
    }, (reason) => {
    });
  }

  searchButtonClick() {
    if (this.filterName || this.filterAddress) {
      this.owners.filter(owner => {
        let nameKeys, addressKeys, name, address;
        if (this.filterName) {
          nameKeys = this.filterName.split(' ');
          name = owner.name + ' ' + owner.surname;
        }
        if (this.filterAddress) {
          addressKeys = this.filterAddress.split(' ');
          address = owner.address.address + ' ' + owner.address.city;
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
    this.filteredItems = this.owners;
  }

  getOwners() {
    this.ownerService.getOwners().subscribe((data) => {
      this.owners = Object.keys(data).map((key) => data[key]);
      this.filteredItems = this.owners;
    },
      (error) => {
        console.log(error);
      });
  }
}
