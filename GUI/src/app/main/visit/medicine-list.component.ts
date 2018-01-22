import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { Medicine } from '../../core/models/visit';
import { VisitMedicine } from '../../core/models/visit';


@Component({
  selector: 'medicine-list',
  templateUrl: './medicine-list.component.html',
})
export class MedicineList {

  @Input() model: VisitMedicine[];

  _allMedicines: Medicine[];
  @Input('medicines')
  set medicines(value: Medicine[]) {
    this._allMedicines = value;
    if (this.model) {
      this.selectedMedicines = _.clone(this.model);
    }
    this.getPropertyList();
  }

  // lista dostępnych leków
  medicineList: Medicine[] = [];

  // nazwa wybranego leku
  selectedMed: VisitMedicine;

  // liczba jednostek wybranego leku
  selectedAmout: number;

  submitted = false;

  form: FormGroup;

  selectedMedicines: VisitMedicine[] = [];

  add() {
    this.selectedMedicines.push(new VisitMedicine(this.selectedMed.name, this.selectedAmout));
    const medToDelete = this.selectedMedicines.find(m => m.name === this.selectedMed.name);
    this.selectedMedicines.splice(this.selectedMedicines.indexOf(medToDelete), 1);
    this.selectedMed.name = null;
  }

  delete(medicine: VisitMedicine) {
    this.selectedMedicines.splice(this.selectedMedicines.indexOf(medicine), 1);
    const medToAdd = this._allMedicines.find(m => m.name === medicine.name);
    medToAdd.totalAmount += medicine.amount;
    this.medicineList.push(medToAdd);
  }

  copyValues() {
    this.model = this.selectedMedicines;
  }

  private getPropertyList() {
    const modelMedicines = this.selectedMedicines;
    this._allMedicines.forEach(v => {
      if (!modelMedicines || !modelMedicines.find(p => p.name === v.name)) {
        this.medicineList.push(v);
      }
    });
  }
}

