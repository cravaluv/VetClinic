import { Component } from '@angular/core';
import { AnimalService } from '../../core/services/animal.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Animal } from '../../core/models/animal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { PetEditComponent } from '../pet/pet-edit.component';
import { OwnerService } from '../../core/services/owner.service';

@Component({
  selector: 'app-own-pets',
  templateUrl: './own-pets.component.html',
})
export class OwnPetsComponent implements OnInit {

  animals: Animal[] = [];
  filteredItems: Animal[] = [];
  selected: Animal;

  // paging
  p = 1;

  // filter panel
  open = true;

  filterName: string;

  constructor(private ownerService: OwnerService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    // this.animalService.getOwnerAnimals().subscribe((data) => {
    //   this.animals = Object.keys(data).map((key) => {
    //     // Formatowanie daty string => Date
    //     data[key].birthDate = new Date(data[key].birthDate);
    //     return data[key];
    //   });
    //   this.filteredItems = this.animals;
    // },
    //   (error) => {
    //     console.log(error);
    //   });
  }

  newAnimal(animal: Animal) {
    const modal = this.modalService.open(PetEditComponent, { size: 'lg' });
    modal.componentInstance.model = animal;
    modal.componentInstance.mode = 'VIEW';

    modal.result.then((result) => {
      // this.ownerService.addAnimalToOwner(result);
    }, (reason) => {
    });
  }

  openAnimal(animal: Animal) {
    const modal = this.modalService.open(PetEditComponent, { size: 'lg' });
    modal.componentInstance.model = animal;
    modal.componentInstance.mode = 'VIEW';

    modal.result.then((result) => {
    }, (reason) => {
    });
  }
}
