import { Component } from '@angular/core';
import { AnimalService } from '../../core/services/animal.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Visit, VisitType, VisitMedicine } from '../../core/models/visit';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { VisitEditComponent } from './visit-edit.component';
import { VisitService } from '../../core/services/visit.service';
import { CommonService } from '../../core/services/common.service';
import { Animal } from '../../core/models/animal';
import { PetEditComponent } from '../pet/pet-edit.component';
import { MedicineListComponent } from './medicine-list.component';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
})
export class VisitComponent implements OnInit {

  visits: Visit[] = [];
  filteredItems: Visit[] = [];
  visitTypes: VisitType[] = [];

  // paging
  p = 1;

  // filter panel
  open = false;

  busy = false;

  filterType: VisitType;
  dateFrom: Date;
  dateTo: Date;

  constructor(private visitService: VisitService, private modalService: NgbModal, private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.visitService.getVisits().subscribe((data) => {
      this.visits = Object.keys(data).map((key) => {
        // Formatowanie daty string => Date
        data[key].date = new Date(data[key].date);
        return data[key];
      });
      this.filteredItems = this.visits;
    },
      (error) => {
        console.log(error);
      });

    this.commonService.getDictionary('VISIT_TYPES').subscribe(data => {
      this.visitTypes = Object.keys(data).map((key) => data[key] as VisitType);
    },
      (error) => {
        console.log(error);
      });
  }

  update(visit: Visit) {
    const modal = this.modalService.open(VisitEditComponent, { size: 'lg' });
    modal.componentInstance.visit = visit;
    modal.componentInstance.mode = 'EDIT';

    modal.result.then((result) => {
      this.getData();
    }, (reason) => {
    });
  }

  showAnimal(id: number) {
    let animalToShow: Animal;
    this.visitService.getAnimalByVisitId(id).subscribe((data) => {
      animalToShow = data as Animal;
      const modal = this.modalService.open(PetEditComponent, { size: 'lg' });
      modal.componentInstance.model = animalToShow;
      modal.componentInstance.mode = 'VIEW';

      modal.result.then((result) => {
      }, (reason) => {
      });
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

  getData() {
    this.busy = true;
    this.visitService.getVisits().subscribe((data) => {
      this.visits = Object.keys(data).map((key) => {
        // Formatowanie daty string => Date
        data[key].date = new Date(data[key].date);
        return data[key];
      });
      this.filteredItems = this.visits;
      this.busy = false;
    },
      (error) => {
        console.log(error);
        this.busy = false;
      });

    this.commonService.getDictionary('VISIT_TYPES').subscribe(data => {
      this.visitTypes = Object.keys(data).map((key) => data[key] as VisitType);
    },
      (error) => {
        console.log(error);
      });
  }

  searchButtonClick() {
    if (this.filterType || this.dateFrom || this.dateTo) {
      this.filteredItems = this.visits.filter(visit => {
        if ((!this.filterType || this.filterType.idVisitType === visit.visitType.idVisitType) &&
          (!this.dateTo || this.dateTo > visit.date) && (!this.dateFrom || this.dateFrom < visit.date)) {
            return true;
          } else {
            return false;
          }
      });
    }
  }

  clearFilter() {
    this.filterType = undefined;
    this.dateFrom = undefined;
    this.dateTo = undefined;
    this.getData();
  }

}
