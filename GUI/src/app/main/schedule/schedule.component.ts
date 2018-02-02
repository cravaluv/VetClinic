import { Component } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Visit, VisitType } from '../../core/models/visit';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { CalendarEvent } from 'angular-calendar';
import { VisitService } from '../../core/services/visit.service';
import { CommonService } from '../../core/services/common.service';
import { MedicineListComponent } from '../visit/medicine-list.component';
import { Animal } from '../../core/models/animal';
import { AnimalScheduleComponent } from './animal-schedule.component';
import { VisitEditComponent } from '../visit/visit-edit.component';
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

  excludeDays: number[] = [0, 6];

  view = 'day';


  visits: Visit[] = [];
  selected: Visit;

  filteredItems: Visit[] = [];

  visitTypes: VisitType[] = [];
  filterType: VisitType;
  dateFrom: Date;
  dateTo: Date;

  busy = false;

  p = 1;

  get today() {
    return new Date();
  }

  constructor(private visitService: VisitService, private commonService: CommonService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.showDayVisits();
    this.commonService.getDictionary('VISIT_TYPES').subscribe(data => {
      this.visitTypes = Object.keys(data).map((key) => data[key] as VisitType);
    },
      (error) => {
        console.log(error);
      });
  }

  showDayVisits() {
    this.busy = true;
    this.visitService.getTodayVisits().subscribe((data) => {
      this.visits = Object.keys(data).map((key) => {
        // Formatowanie daty string => Date
        data[key].date = new Date(data[key].date);
        return data[key];
      });
      this.filteredItems = this.visits.filter(visit => visit.date.getDate() === this.today.getDate());
      this.busy = false;
    },
      (error) => {
        console.log(error);
        this.busy = false;
      });
  }

  showWeekVisits() {
    this.busy = true;
    this.visitService.getVisitsByCurrentWeek().subscribe((data) => {
      this.visits = Object.keys(data).map((key) => {
        // Formatowanie daty string => Date
        data[key].date = new Date(data[key].date);
        return data[key];
      });
      this.filteredItems = this.visits;
      this.busy = false;
    },
      (error) => {
        console.log(error);
        this.busy = false;
      });
  }

  showMedicines(visit: Visit) {
    const modal = this.modalService.open(MedicineListComponent, { size: 'lg' });
    modal.componentInstance.mode = 'EDIT';
    modal.componentInstance.visit = visit;

    modal.result.then((result) => {
    }, (reason) => {
    });
  }

  update(visit: Visit) {
    const modal = this.modalService.open(VisitEditComponent, { size: 'lg' });
    modal.componentInstance.visit = visit;
    modal.componentInstance.mode = 'EDIT';

    modal.result.then((result) => {
      this.view === 'day' ? this.showDayVisits() : this.showWeekVisits();
    }, (reason) => {
    });
  }

  showAnimal(id: number) {
    let animalToShow: Animal;
    this.visitService.getAnimalByVisitId(id).subscribe((data) => {
      animalToShow = data as Animal;
      const modal = this.modalService.open(AnimalScheduleComponent, { size: 'lg' });
      modal.componentInstance.animal = animalToShow;
      modal.result.then((result) => {
      }, (reason) => {
      });
    });
  }

  getVisits() {
    this.view === 'day' ? this.showDayVisits() : this.showWeekVisits();
  }

}
