import { Component, Input } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Animal } from '../../core/models/animal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VisitEditComponent } from '../visit/visit-edit.component';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
})
export class PetEditComponent implements OnInit {

  @Input() model: Animal;
  @Input() editMode = true;

  modelCopy: Animal;

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    if (this.editMode) {
      this.modelCopy = _.clone(this.model);
      this.modelCopy.birthDate = new Date(this.modelCopy.birthDate);
    }
    this.editMode ? this.modelCopy = _.clone(this.model) : this.modelCopy = new Animal();
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
}
