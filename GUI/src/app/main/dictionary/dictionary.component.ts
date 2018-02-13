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

  busy = false;

  duplicate = false;

  public dictionary: any[] = [];

  modes = {
    'MEDICINES': {
      title: 'Leki',
      attr: 'name'
    },
    'ANIMAL_TYPES': {
      title: 'Gatunki zwierząt',
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
    this.refreshDictionary();
  }

  add() {
    if (!this.dictionary.find(v => v[this.modes[this.mode].attr].toUpperCase() === this.newValue.toUpperCase())) {
      let newObj;
      if (this.mode === 'MEDICINES') {
        newObj = new Medicine(this.newValue, this.amount, this.minAmount);
      } else {
        newObj = { [this.modes[this.mode].attr]: this.newValue };
      }
      this.busy = true;
      this.commonService.saveDictionary(this.mode, newObj).subscribe(
        res => {
          this.refreshDictionary();
        },
        err => {
          console.log("Error occured");
        });
      this.newValue = '';
      this.minAmount = 0;
      this.amount = 0;
    } else {
      this.duplicate = true;
    }
  }

  clearDuplicateInfo() {
    if (this.duplicate) { this.duplicate = false; }
  }

  refreshDictionary() {
    // załaduj słownik
    this.busy = true;
    this.commonService.getDictionary(this.mode).subscribe(data => {
      this.dictionary = Object.keys(data).map((key) => data[key]);
      this.busy = false;
    },
      (error) => {
        this.busy = false;
      });
  }

}
