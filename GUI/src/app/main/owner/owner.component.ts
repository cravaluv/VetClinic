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
  filter;
  selected: Owner;

  filteredItems: Owner[];
  p = 1;
  pages = 4;
  pageSize = 5;
  pageNumber = 0;
  currentIndex = 1;
  items: Owner[];
  pagesIndex: Array<number>;
  pageStart = 1;
  inputName = '';

  // Sortowanie
  key: string;
  reverse = false;

  constructor(private ownerService: OwnerService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getOwners();
  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  add() {
    const modal = this.modalService.open(OwnerEditComponent, { size: 'lg' });

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
