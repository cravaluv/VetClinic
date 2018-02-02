import { Component, Input, ViewChild } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Visit, VisitType, Medicine } from '../../core/models/visit';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal, NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../core/services/common.service';
import { VisitService } from '../../core/services/visit.service';
import { Animal } from '../../core/models/animal';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
})
export class AddVisitComponent implements OnInit {

  @Input() animals: Animal[] = [];

  availableHours: Date[] = [];


  animalVisit: Animal;

  selectedVisitDate: Date;
  selectedVisitHour;

  @ViewChild('animalForm') form: any;

  workStart = 9;
  workEnd = 17;

  modelCopy = new Visit();

  visitTypes: VisitType[] = [];

  medicines: Medicine[] = [];

  submitted = false;

  constructor(private activeModal: NgbActiveModal, config: NgbDatepickerConfig, private authService: AuthService,
    private commonService: CommonService, private visitService: VisitService, private ownerService: OwnerService) {
    config.outsideDays = 'visible';
    config.displayMonths = 2;
    config.navigation = 'arrows';
    config.markDisabled = (date: NgbDateStruct) => {
      const d = new Date(date.year, date.month - 1, date.day);
      const currentDate = new Date();
      return d.getDay() === 0 || d.getDay() === 6 ||
        (d.getDate() < currentDate.getDate() && d.getMonth() <= currentDate.getMonth()) || d.getFullYear() < currentDate.getFullYear() ||
        d.getMonth() < currentDate.getMonth();
    };
  }

  ngOnInit(): void {
    this.commonService.getDictionary('VISIT_TYPES').subscribe(data => {
      this.visitTypes = Object.keys(data).map((key) => data[key] as VisitType);
    },
      (error) => {
        console.log(error);
      });

      const ccc = this.animals;

    // this.ownerService.getOwnerAnimals(this.authService.getUserId()).subscribe(data => {
    //   this.animals = Object.keys(data).map((key) => data[key]);
    // });
    this.modelCopy = new Visit();
  }

onSubmit() {
  this.submitted = true;
  if (this.form.valid) {
    this.visitService.addVisit(this.modelCopy, this.animalVisit.idAnimal).subscribe(
      res => {
        this.activeModal.close();
      },
      err => {
      }
    );
  }
}

onChange(select) {
  const time = select.target.value.split(':');
  if (time.length === 2) {
    this.selectedVisitDate.setHours(time[0]);
    this.selectedVisitDate.setMinutes(time[1]);
  }
}

onDismiss() {
  this.activeModal.dismiss();
}

getAvailableHours(selectedDate: Date) {
  const dataToString = selectedDate;
  this.availableHours = [];
  const dateString = dataToString.getUTCFullYear() + '-' + this.checkDataFormat(dataToString.getMonth() + 1) + '-' +
    this.checkDataFormat(dataToString.getDate());
  // Pobranie z serwera
  this.visitService.getVisitsByDate(dateString).
    subscribe((data) => {
      const visitsOfTheDay = Object.keys(data).map((key) => {
        // Formatowanie daty string => Date
        data[key].date = new Date(data[key].date);
        return data[key];
      });
      const iterate = (this.workEnd - this.workStart) * 4;
      let previousHour;
      for (let i = 0; i < iterate; i++) {
        // Sprawdzenie czy data juz ma wizyte, jesli nie to:
        if (!previousHour) {
          selectedDate.setHours(this.workStart);
          selectedDate.setMinutes(0);
          previousHour = selectedDate;
        } else {
          previousHour.setMinutes(previousHour.getMinutes() + 15);
        }
        const dateToAdd = new Date(previousHour);
        if (visitsOfTheDay.length === 0 || !visitsOfTheDay.find(visit => visit.date.getTime() === dateToAdd.getTime())) {
          this.availableHours.push(dateToAdd);
        }
      }
      if (this.visit && this.visit.date.getDate() === selectedDate.getDate() &&
        this.visit.date.getMonth() === selectedDate.getMonth() && this.visit.date.getFullYear() === selectedDate.getFullYear()) {
        this.availableHours.unshift(visitsOfTheDay.find(visit => visit.idVisit === this.modelCopy.idVisit).date);
      }
      this.availableHours.length > 0 ? this.selectedVisitDate = this.availableHours[0] : this.selectedVisitDate = undefined;
    });
}

checkDataFormat(number) {
  return number < 10 ? '0' + number : number;
}
}
