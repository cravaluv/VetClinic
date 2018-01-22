import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
})
export class DictionaryComponent implements OnInit {

  @Input() dictionaryName: string;

  dictionaryCopy: any[];

  newValue = '';

  duplicate = false;


  private dictionary: any[] = [];

  modalTitle = {
    'Medicines': 'Leki',
    'Types': 'Typy zwierząt',
    'Colors': 'Kolory'
  };

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    // załaduj słownik

  }

  add() {
    if (!this.dictionaryCopy.find(v => v.value.toUpperCase() === this.newValue.toUpperCase())) {
      this.dictionaryCopy.push({ value: this.newValue, visible: true, _new: true });
      this.newValue = '';
    } else {
      this.duplicate = true;
    }
  }

  delete(dictionaryValue: any) {
    this.dictionaryCopy.splice(this.dictionaryCopy.indexOf(dictionaryValue), 1);
  }

  clearDuplicateInfo() {
    if (this.duplicate) { this.duplicate = false; }
  }

  save() {

  }
}
