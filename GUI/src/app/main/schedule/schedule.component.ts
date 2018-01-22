import { Component } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Visit } from '../../core/models/visit';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { CalendarEvent } from 'angular-calendar';
// import { OwnerEditComponent } from './owner-edit.component';

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  // styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  currentDateModel = new Date();
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Editable event',
      color: colors.yellow,
      start: new Date(2018, 1, 14, 12)
    }
  ];

  view = 'day';


  visits: Visit[] = [];
  filter;
  selected: Visit;

  filteredItems: Visit[];
  p = 1;
  pages = 4;
  pageSize = 5;
  pageNumber = 0;
  currentIndex = 1;
  items: Visit[];
  pagesIndex: Array<number>;
  pageStart = 1;
  inputName = '';

  // Sortowanie
  key: string;
  reverse = false;

  get today() {
    return new Date();
  }

  constructor(private ownerService: OwnerService, private modalService: NgbModal) {
  }

  ngOnInit(): void {

  }

  onSegmentClick(event) {
    const bbb = event;
  }

  // sort(key: string) {
  //   this.key = key;
  //   this.reverse = !this.reverse;
  // }

  // add() {
  //   const modal = this.modalService.open(OwnerEditComponent, { size: 'lg' });

  //   modal.result.then((result) => {
  //     this.ownerService.addOwner(result);
  //     this.getOwners();
  //   }, (reason) => {
  //   });
  // }

  // onSelect(owner: Owner) {
  //   this.selected = owner;
  // }

  // update(owner: Owner) {
  //   const modal = this.modalService.open(OwnerEditComponent, { size: 'lg' });
  //   modal.componentInstance.model = owner;

  //   modal.result.then((result) => {
  //     this.ownerService.update(result);
  //     this.getOwners();
  //   }, (reason) => {
  //   });
  // }

  // getOwners() {
  //   this.ownerService.getOwners().subscribe((data) => {
  //     this.owners = Object.keys(data).map((key) => data[key]);
  //     this.filteredItems = this.owners;
  //   },
  //     (error) => {
  //       console.log(error);
  //     });
  // }
}
