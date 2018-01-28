import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { CommonService } from '../../core/services/common.service';
import { Medicine } from '../../core/models/visit';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
})
export class DictionaryComponent implements OnInit {

  @Input() mode: 'MEDICINES' | 'COLORS' | 'DISEASTERS' | 'ANIMAL_TYPES' | 'VISIT_TYPES';

  newValue = '';

  amount = 0;
  minAmount = 0;

  duplicate = false;

  public dictionary: any[] = [];

  modalTitle = {
    'MEDICINES': 'Leki',
    'ANIMAL_TYPES': 'Typy zwierząt',
    'COLORS': 'Kolory',
    'DISEASTERS': 'Choroby',
    'VISIT_TYPES': 'Typy wizyt'
  };

  constructor(public activeModal: NgbActiveModal, private commonService: CommonService) { }

  ngOnInit(): void {
    // załaduj słownik
    this.commonService.getDictionary(this.mode).subscribe(data => {
      this.dictionary = Object.keys(data).map((key) => data[key]);
    },
      (error) => {
        console.log(error);
      });
  }

  add() {
    if (!this.dictionary.find(v => v.name.toUpperCase() === this.newValue.toUpperCase())) {
      let newObj;
      this.mode !== 'MEDICINES' ? newObj = { name: this.newValue } : newObj = new Medicine(this.newValue, this.amount, this.minAmount);
      this.dictionary.push(newObj);
      this.newValue = '';
    } else {
      this.duplicate = true;
    }
  }

  clearDuplicateInfo() {
    if (this.duplicate) { this.duplicate = false; }
  }

  save() {
    this.commonService.saveDictionary(this.mode, this.dictionary).subscribe(
      res => {
        this.activeModal.close();
      },
      err => {
        console.log("Error occured");
      });
  }
}
