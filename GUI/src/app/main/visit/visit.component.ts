import { Component } from '@angular/core';
import { AnimalService } from '../../core/services/animal.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Visit, VisitType } from '../../core/models/visit';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { VisitEditComponent } from './visit-edit.component';
import { VisitService } from '../../core/services/visit.service';
import { CommonService } from '../../core/services/common.service';
import { Animal } from '../../core/models/animal';
import { PetEditComponent } from '../pet/pet-edit.component';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
})
export class VisitComponent implements OnInit {

  visits: Visit[] = [];
  filteredItems: Visit[] = [];
  visitTypes: VisitType[] = [];

  selectedDescription: string;

  // paging
  p = 1;

  // filter panel
  open = true;

  filterType: string;

  constructor(private visitService: VisitService, private modalService: NgbModal, private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.visitService.getVisits().subscribe((data) => {
      this.visits = Object.keys(data).map((key) =>  {
        // Formatowanie daty string => Date
        data[key].date = new Date(data[key].date);
        return data[key];
      });
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
    modal.componentInstance.model = visit;

    modal.result.then((result) => {
      this.visitService.update(result);
    }, (reason) => {
    });
  }

  showPopover(description: string) {
    this.selectedDescription = description;
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
}
