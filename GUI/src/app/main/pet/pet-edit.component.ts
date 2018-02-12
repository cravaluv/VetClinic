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

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
})
export class PetEditComponent implements OnInit {

  @Input() model: Animal;
  @Input() owner: Owner;
  @Input() mode: 'NEW' | 'EDIT' | 'VIEW';

  @ViewChild('petForm') form: any;

  submitted = false;

  modalTitle = {
    'NEW': 'DODAJ ZWIERZĘ',
    'EDIT': 'EDYTUJ ZWIERZĘ',
    'VIEW': 'POKAŻ ZWIERZĘ'
  };

  modelCopy: Animal;

  animalTypes: AnimalType[] = [];

  colors: Color[] = [];

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal, private animalService: AnimalService,
    private commonService: CommonService) {
  }

  ngOnInit(): void {
    if (this.mode === 'NEW') {
      this.modelCopy = new Animal();
    } else {
      this.modelCopy = _.clone(this.model);
      this.modelCopy.birthDate = new Date(this.modelCopy.birthDate);
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
    this.submitted = true;
    if (this.form.valid) {
      if (this.mode === 'NEW') {
        this.animalService.addAnimal(this.modelCopy, this.owner.idOwner).subscribe(
          res => {
            this.activeModal.close();
          },
          err => {
            console.log("Error occured");
          }
        );
      } else {
        this.animalService.update(this.modelCopy).subscribe(
          res => {
            this.activeModal.close();
          },
          err => {
            console.log("Error occured");
          }
        );
      }
    }
  }

  onDismiss() {
    this.activeModal.dismiss();
  }
}
