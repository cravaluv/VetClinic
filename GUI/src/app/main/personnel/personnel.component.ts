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
  filter;

  filteredItems: Personnel[];
  pages = 4;
  pageSize = 5;
  pageNumber = 0;
  currentIndex = 1;
  items: Personnel[];
  pagesIndex: Array<number>;
  pageStart = 1;
  inputName = '';

  // sorting
  key = 'name';
  reverse = false;

  constructor(private personnelService: PersonnelService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.personnelService.getPersonnel().subscribe((data) => {
      this.personnel = Object.keys(data).map((key) => data[key]);
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
    const cc = 6;
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
