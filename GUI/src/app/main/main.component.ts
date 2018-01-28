import { Component } from '@angular/core';
import { CommonService } from '../core/services/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DictionaryComponent } from './dictionary/dictionary.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})

export class MainComponent {
  title = 'app';

  constructor(private commonService: CommonService, private modalService: NgbModal) {

  }

  openDictionary(dictionaryType: 'MEDICINES' | 'COLORS' | 'DISEASTERS' | 'ANIMAL_TYPES' | 'VISIT_TYPES') {
    // let animalToShow: Animal;
    // this.visitService.getAnimalByVisitId(id).subscribe((data) => {
    //   animalToShow = data as Animal;
    const modal = this.modalService.open(DictionaryComponent, { size: 'lg' });
    modal.componentInstance.mode = dictionaryType;

    modal.result.then((result) => {
    }, (reason) => {
    });
  // });
  }

}
