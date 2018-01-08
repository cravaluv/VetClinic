import { Component, Input } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Visit } from '../../core/models/visit';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-visit-edit',
  templateUrl: './visit-edit.component.html',
})
export class VisitEditComponent implements OnInit {

  @Input() model: Visit;
  @Input() editMode = true;

  modelCopy = new Visit();

  submitted = false;

  constructor(private activeModal: NgbActiveModal ) {
  }

  ngOnInit(): void {
    if (this.editMode) {
      this.modelCopy = _.clone(this.model);
    }
  }

  onSubmit() {
    this.activeModal.close(this.modelCopy);
  }

  onDismiss() {
    this.activeModal.dismiss();
  }

}
