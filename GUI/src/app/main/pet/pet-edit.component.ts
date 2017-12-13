import { Component, Input } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Animal } from '../../core/models/animal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
})
export class PetEditComponent implements OnInit {

  @Input() model: Animal;
  @Input() editMode = true;

  modelCopy: Animal;

  constructor(private activeModal: NgbActiveModal ) {
  }

  ngOnInit(): void {
    this.modelCopy = _.clone(this.model);
  }

  onSubmit() {
    this.activeModal.close(this.modelCopy);
  }

  onDismiss() {
    this.activeModal.dismiss();
  }

  addVisit() {
    
  }
}
