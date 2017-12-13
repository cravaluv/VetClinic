import { Component } from '@angular/core';
import { AnimalService } from '../../core/services/animal.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Animal } from '../../core/models/animal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { PetEditComponent } from './pet-edit.component';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
})
export class PetComponent implements OnInit {

  pets: Animal[] = [];

  constructor(private animalService: AnimalService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    // this.animalService.getAnimals().subscribe((data) => {
    //   this.pets = Object.keys(data).map((key) =>  data[key]);
    // },
    //   (error) => {
    //     console.log(error);
    //   });
  }

  add() {
    const modal = this.modalService.open(PetEditComponent, { size: 'lg' });
    modal.componentInstance.model = new Animal();

    modal.result.then((result) => {
      this.animalService.addAnimal(result);
    }, (reason) => {
    });
  }

  update(animal: Animal) {
    const modal = this.modalService.open(PetEditComponent, { size: 'lg' });
    modal.componentInstance.model = animal;

    modal.result.then((result) => {
      this.animalService.update(result);
    }, (reason) => {
    });
  }
}