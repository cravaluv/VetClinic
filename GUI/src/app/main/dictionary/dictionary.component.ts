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

  modes = {
    'MEDICINES': {
      title: 'Leki',
      attr: 'name'
    },
    'ANIMAL_TYPES': {
      title: 'Typy zwierząt',
      attr: 'type'
    },
    'COLORS': {
      title: 'Kolory',
      attr: 'color'
    },
    'VISIT_TYPES': {
      title: 'Typy wizyt',
      attr: 'type'
    }
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
    if (!this.dictionary.find(v => v[this.modes[this.mode].attr].toUpperCase() === this.newValue.toUpperCase())) {
      let newObj;
      if (this.mode === 'MEDICINES') {
        newObj = new Medicine(this.newValue, this.amount, this.minAmount);
      } else {
        newObj = { [this.modes[this.mode].attr]: this.newValue };
      }
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
