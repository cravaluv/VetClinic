import { Component, Input, ViewChild } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Animal, AnimalType, Color } from '../../core/models/animal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VisitEditComponent } from '../visit/visit-edit.component';
import { Visit } from '../../core/models/visit';
import { CommonService } from '../../core/services/common.service';
import { AnimalService } from '../../core/services/animal.service';
import { Owner } from '../../core/models/owner';
import { MedicineListComponent } from '../visit/medicine-list.component';

@Component({
  selector: 'app-animal-schedule',
  templateUrl: './animal-schedule.component.html',
})
export class AnimalScheduleComponent implements OnInit {

  @Input() animal: Animal;

  visits: Visit[] = [];


  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal, private animalService: AnimalService,
    private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.animal.birthDate = new Date(this.animal.birthDate);
    this.getVisits();
  }


  onDismiss() {
    this.activeModal.dismiss();
  }


  getVisits() {
    this.animalService.getAnimalVisits(this.animal.idAnimal).subscribe((data) => {
      this.visits = Object.keys(data).map((key) => {
        // Formatowanie daty string => Date
        data[key].date = new Date(data[key].date);
        return data[key];
      });
    },
      (error) => {
        console.log(error);
      });
  }

  showMedicines(visit: Visit) {
    const modal = this.modalService.open(MedicineListComponent, { size: 'lg' });
    modal.componentInstance.mode = 'VIEW';
    modal.componentInstance.visit = visit;

    modal.result.then((result) => {
    }, (reason) => {
    });
}
}
