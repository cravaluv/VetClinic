import { Component, Input } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Visit, VisitType, Medicine } from '../../core/models/visit';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal, NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../core/services/common.service';

@Component({
  selector: 'app-visit-edit',
  templateUrl: './visit-edit.component.html',
})
export class VisitEditComponent implements OnInit {

  @Input() model: Visit;
  @Input() editMode = true;

  availableHours: Date[] = [];

  selectedVisitDate: Date;
  selectedVisitHour;

  workStart = 9;
  workEnd = 17;

  modelCopy = new Visit();

  visitTypes: VisitType[] = [];

  medicines: Medicine[] = [];

  submitted = false;

  constructor(private activeModal: NgbActiveModal, config: NgbDatepickerConfig, private commonService: CommonService) {
    config.outsideDays = 'hidden';
    config.navigation = 'none';
    config.markDisabled = (date: NgbDateStruct) => {
      const d = new Date(date.year, date.month - 1, date.day);
      const currentDate = new Date();
      return d.getDay() === 0 || d.getDay() === 6 || d.getDate() <= currentDate.getDate();
    };

    // Pobranie dostepnych leków z serwera
  }

  ngOnInit(): void {
    this.editMode ? this.modelCopy = _.clone(this.model) : this.modelCopy = new Visit();

    this.commonService.getDictionary('VISIT_TYPES').subscribe(data => {
      this.visitTypes = Object.keys(data).map((key) => data[key] as VisitType);
    },
      (error) => {
        console.log(error);
      });

    this.commonService.getDictionary('MEDICINES').subscribe(data => {
      this.medicines = Object.keys(data).map((key) => data[key] as Medicine);
    },
      (error) => {
        console.log(error);
      });
  }

  onSubmit() {
    this.modelCopy.date = this.selectedVisitDate;
    this.activeModal.close(this.modelCopy);
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
    // Pobranie z serwera
    // this.visits = ...
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
      this.availableHours.push(dateToAdd);
    }
    this.availableHours.length > 0 ? this.selectedVisitDate = this.availableHours[0] : this.selectedVisitDate = undefined;
  }
}
