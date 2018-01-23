import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { Medicine } from '../../core/models/visit';
import { VisitMedicine } from '../../core/models/visit';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
})
export class MedicineListComponent {

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

  duplicate = false;

  // lista dostępnych leków
  medicineList: Medicine[] = [];

  // nazwa wybranego leku
  selectedMed: Medicine;

  // liczba jednostek wybranego leku
  selectedAmount: number;

  submitted = false;

  form: FormGroup;

  selectedMedicines: VisitMedicine[] = [];

  add() {
    this.selectedMedicines.push(new VisitMedicine(this.selectedMed.name, this.selectedAmount));
    const medToDelete = this.medicineList.find(m => m.name === this.selectedMed.name);
    this.medicineList.splice(this.medicineList.indexOf(medToDelete), 1);
    this.medicineList.length > 0 ? this.selectedMed = this.medicineList[0] : this.selectedMed = null;
  }

  delete(medicine: VisitMedicine) {
    this.selectedMedicines.splice(this.selectedMedicines.indexOf(medicine), 1);
    const medToAdd = this._allMedicines.find(m => m.name === medicine.name);
    this.medicineList.push(medToAdd);
  }

  copyValues() {
    this.model = this.selectedMedicines;
  }

  select(select) {
    const selectedName = select.target.value.split(' | ');
    this.selectedMed = this.medicineList.find(med => med.name === selectedName[0]);
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

