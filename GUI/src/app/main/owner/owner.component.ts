import { Component } from '@angular/core';
import { OwnerService } from '../../core/services/owner.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Owner } from '../../core/models/owner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { OwnerEditComponent } from './owner-edit.component';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
})
export class OwnerComponent implements OnInit {

  owners: Owner[] = [];

  constructor(private ownerService: OwnerService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.ownerService.getOwners().subscribe((data) => {
      this.owners = Object.keys(data).map((key) =>  data[key]);
    },
      (error) => {
        console.log(error);
      });
  }

  add() {
    const modal = this.modalService.open(OwnerEditComponent, { size: 'lg' });
    modal.componentInstance.model = new Owner();

    modal.result.then((result) => {
      this.ownerService.addOwner(result);
    }, (reason) => {
    });
  }

  update(owner: Owner) {
    const modal = this.modalService.open(OwnerEditComponent, { size: 'lg' });
    modal.componentInstance.model = owner;

    modal.result.then((result) => {
      this.ownerService.update(result);
    }, (reason) => {
    });
  }
}
