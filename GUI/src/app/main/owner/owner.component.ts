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

  filteredItems: Owner[];
  pages = 4;
  pageSize = 1;
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
    this.ownerService.getOwners().subscribe((data) => {
      this.owners = Object.keys(data).map((key) => data[key]);
    },
      (error) => {
        console.log(error);
      });
  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  initPagination() {
    this.currentIndex = 1;
    this.pageStart = 1;
    this.pages = 4;

    this.pageNumber = parseInt("" + (this.filteredItems.length / this.pageSize));
    if (this.filteredItems.length % this.pageSize !== 0) {
      this.pageNumber++;
    }

    if (this.pageNumber < this.pages) {
      this.pages = this.pageNumber;
    }

    this.refreshItems();
  }

  refreshItems() {
    this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
    this.pagesIndex = this.fillArray();
  }

  fillArray(): any {
    var obj = new Array();
    for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
      obj.push(index);
    }
    return obj;
  }

  prevPage() {
    if (this.currentIndex > 1) {
      this.currentIndex--;
    }
    if (this.currentIndex < this.pageStart) {
      this.pageStart = this.currentIndex;
    }
    this.refreshItems();
  }
  nextPage() {
    if (this.currentIndex < this.pageNumber) {
      this.currentIndex++;
    }
    if (this.currentIndex >= (this.pageStart + this.pages)) {
      this.pageStart = this.currentIndex - this.pages + 1;
    }

    this.refreshItems();
  }
  setPage(index: number) {
    this.currentIndex = index;
    this.refreshItems();
  }

  add() {
    const modal = this.modalService.open(OwnerEditComponent, { size: 'lg' });
    modal.componentInstance.model = new Owner();

    modal.result.then((result) => {
      this.ownerService.addOwner(result);
    }, (reason) => {
    });
  }

  update(owner: Owner) {
    const modal = this.modalService.open(OwnerEditComponent, { size: 'lg' });
    modal.componentInstance.model = owner;

    modal.result.then((result) => {
      this.ownerService.update(result);
    }, (reason) => {
    });
  }
}
