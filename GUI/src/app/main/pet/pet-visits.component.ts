import { Component, Input } from '@angular/core';
import { AnimalService } from '../../core/services/animal.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Animal } from '../../core/models/animal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { PetEditComponent } from '../pet/pet-edit.component';
import { OwnerService } from '../../core/services/owner.service';
import { Owner } from '../../core/models/owner';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Visit } from '../../core/models/visit';
import { VisitService } from '../../core/services/visit.service';
import { VisitEditComponent } from '../visit/visit-edit.component';
import { MedicineListComponent } from '../visit/medicine-list.component';

@Component({
  selector: 'app-pet-visits',
  templateUrl: './pet-visits.component.html',
})
export class PetVisitsComponent implements OnInit {

  @Input() animal: Animal;
  @Input() view: 'EDIT' | 'VIEW' = 'EDIT';

  visits: Visit[] = [];

  constructor(private activeModal: NgbActiveModal, private visitService: VisitService,
      private animalService: AnimalService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getVisits();
  }

  add() {
    const modal = this.modalService.open(VisitEditComponent, { size: 'lg' });
    modal.componentInstance.mode = 'NEW';
    modal.componentInstance.animal = this.animal;

    modal.result.then((result) => {
      this.getVisits();
    }, (reason) => {
    });
  }

  update(visit: Visit) {
    const modal = this.modalService.open(VisitEditComponent, { size: 'lg' });
    modal.componentInstance.visit = visit;
    modal.componentInstance.mode = this.view;

    modal.result.then((result) => {
      this.getVisits();
    });
  }

  onDismiss() {
    this.activeModal.dismiss();
  }

  getVisits() {
    this.animalService.getAnimalVisits(this.animal.idAnimal).subscribe((data) => {
      this.visits = Object.keys(data).map((key) => {
        // Formatowanie daty string => Date
        data[key].date = new Date(data[key].date);
        return data[key];
      });
    },
      (error) => {
        console.log(error);
      });
  }

  showMedicines(visit: Visit) {
    const modal = this.modalService.open(MedicineListComponent, { size: 'lg' });
    modal.componentInstance.mode = 'VIEW';
    modal.componentInstance.visit = visit;

    modal.result.then((result) => {
    }, (reason) => {
    });
}
}
