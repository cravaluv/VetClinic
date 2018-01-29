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

  animals: Animal[] = [];
  filteredItems: Animal[] = [];
  selected: Animal;

  // paging
  p = 1;

  // filter panel
  open = true;

  filterName: string;

  constructor(private animalService: AnimalService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe((data) => {
      this.animals = Object.keys(data).map((key) => {
        // Formatowanie daty string => Date
        data[key].birthDate = new Date(data[key].birthDate);
        return data[key];
      });
      this.filteredItems = this.animals;
    },
      (error) => {
        console.log(error);
      });
  }

  searchButtonClick() {
    if (this.filterName) {
      this.animals.filter(animal => animal.name.includes(this.filterName));
    }
  }

  clearFilter() {
    this.filterName = undefined;
    this.filteredItems = this.animals;
  }

  update(animal: Animal) {
    const modal = this.modalService.open(PetEditComponent, { size: 'lg' });
    modal.componentInstance.model = animal;
    modal.componentInstance.mode = 'EDIT';

    modal.result.then((result) => {
      this.animalService.update(result);
    }, (reason) => {
    });
  }
}
