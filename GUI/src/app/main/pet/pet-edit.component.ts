import { Component, Input } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Animal, AnimalType, Color } from '../../core/models/animal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VisitEditComponent } from '../visit/visit-edit.component';
import { Visit } from '../../core/models/visit';
import { CommonService } from '../../core/services/common.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
})
export class PetEditComponent implements OnInit {

  @Input() model: Animal;
  @Input() mode: 'NEW' | 'EDIT' | 'VIEW';

  modalTitle = {
    'NEW': 'DODAJ ZWIERZĘ',
    'EDIT': 'EDYTUJ ZWIERZĘ',
    'VIEW': 'POKAŻ ZWIERZĘ'
  };

  modelCopy: Animal;

  animalTypes: AnimalType[] = [];

  colors: Color[] = [];

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal, private commonService: CommonService) {
  }

  ngOnInit(): void {
    if (this.mode === 'NEW') {
      this.modelCopy = new Animal();
    } else {
      this.modelCopy = _.clone(this.model);
      this.modelCopy.birthDate = new Date(this.modelCopy.birthDate);
      this.modelCopy.visits.forEach(visit => {
        visit.date = new Date(visit.date);
      });
    }
    this.commonService.getDictionary('ANIMAL_TYPES').subscribe(data => {
      this.animalTypes = Object.keys(data).map((key) => data[key] as AnimalType);
    },
      (error) => {
        console.log(error);
      });

    this.commonService.getDictionary('COLORS').subscribe(data => {
      this.colors = Object.keys(data).map((key) => data[key] as Color);
    },
      (error) => {
        console.log(error);
      });
  }

  onSubmit() {
    this.activeModal.close(this.modelCopy);
  }

  onDismiss() {
    this.activeModal.dismiss();
  }

  addVisit() {
    const modal = this.modalService.open(VisitEditComponent, { size: 'lg' });
    modal.componentInstance.editMode = false;

    modal.result.then((result) => {
      this.modelCopy.visits.push(result);
    }, (reason) => {
    });
  }

  updateVisit(visit: Visit) {
    const modal = this.modalService.open(VisitEditComponent, { size: 'lg' });
    modal.componentInstance.model = visit;

    modal.result.then((result) => {
      const index = this.modelCopy.visits.indexOf(visit);
      this.modelCopy.visits[index] = result;
    }, (reason) => {
    });
  }
}
