import { Component, Input } from '@angular/core';
import { AnimalService } from '../../core/services/animal.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Animal } from '../../core/models/animal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { PetEditComponent } from '../pet/pet-edit.component';
import { OwnerService } from '../../core/services/owner.service';
import { Owner } from '../../core/models/owner';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-owner-animals',
  templateUrl: './owner-animals.component.html',
})
export class OwnerAnimalsComponent implements OnInit {

  @Input() owner: Owner;

  animals: Animal[] = [];

  constructor(private activeModal: NgbActiveModal, private ownerService: OwnerService,
      private animalService: AnimalService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getAnimals();
  }

  add() {
    const modal = this.modalService.open(PetEditComponent, { size: 'lg' });
    modal.componentInstance.mode = 'NEW';
    modal.componentInstance.owner = this.owner;

    modal.result.then((result) => {
      this.getAnimals();
    }, (reason) => {
    });
  }
  update(animal: Animal) {
    const modal = this.modalService.open(PetEditComponent, { size: 'lg' });
    modal.componentInstance.model = animal;
    modal.componentInstance.mode = 'EDIT';

    modal.result.then((result) => {
      this.getAnimals();
    }, (reason) => {
    });
  }

  onDismiss() {
    this.activeModal.dismiss();
  }

  getAnimals() {
    this.ownerService.getOwnerAnimals(this.owner.idOwner).subscribe((data) => {
      this.animals = Object.keys(data).map((key) => {
        // Formatowanie daty string => Date
        data[key].birthDate = new Date(data[key].birthDate);
        return data[key];
      });
    },
      (error) => {
        console.log(error);
      });
  }
}
