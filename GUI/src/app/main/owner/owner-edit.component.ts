import { Component, Input } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Owner } from '../../core/models/owner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
})
export class OwnerEditComponent implements OnInit {

  @Input() model: Owner;
  @Input() editMode = true;

  modelCopy: Owner;

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
}
