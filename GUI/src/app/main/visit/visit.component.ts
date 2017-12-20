import { Component } from '@angular/core';
import { AnimalService } from '../../core/services/animal.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Visit } from '../../core/models/visit';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { VisitEditComponent } from './visit-edit.component';
import { VisitService } from '../../core/services/visit.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
})
export class VisitComponent implements OnInit {

  visits: Visit[] = [];

  constructor(private visitService: VisitService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    // this.animalService.getAnimals().subscribe((data) => {
    //   this.pets = Object.keys(data).map((key) =>  data[key]);
    // },
    //   (error) => {
    //     console.log(error);
    //   });
  }

  // add() {
  //   const modal = this.modalService.open(VisitEditComponent, { size: 'lg' });
  //   // modal.componentInstance.model = new Animal();

  //   modal.result.then((result) => {
  //     this.visitService.addVisit(result);
  //   }, (reason) => {
  //   });
  // }

  update(visit: Visit) {
    const modal = this.modalService.open(VisitEditComponent, { size: 'lg' });
    modal.componentInstance.model = visit;

    modal.result.then((result) => {
      this.visitService.update(result);
    }, (reason) => {
    });
  }
}
