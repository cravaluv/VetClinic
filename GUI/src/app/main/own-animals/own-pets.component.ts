import { Component } from '@angular/core';
import { AnimalService } from '../../core/services/animal.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Animal } from '../../core/models/animal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { PetEditComponent } from '../pet/pet-edit.component';
import { OwnerService } from '../../core/services/owner.service';
import { AuthService } from '../../auth/auth.service';
import { PetVisitsComponent } from '../pet/pet-visits.component';

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

  busy = false;

  constructor(private ownerService: OwnerService, private modalService: NgbModal, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.ownerService.getOwnerAnimals(this.authService.getUserId()).subscribe((data) => {
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

  showVisits(animal: Animal) {
    const modal = this.modalService.open(PetVisitsComponent, { size: 'lg' });
    modal.componentInstance.animal = animal;
    modal.componentInstance.view = 'VIEW';

    modal.result.then(() => {
      // this.getOwners();
    }, (reason) => {
    });
  }
}
