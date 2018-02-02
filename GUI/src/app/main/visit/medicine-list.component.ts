import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { Medicine, Visit } from '../../core/models/visit';
import { VisitMedicine } from '../../core/models/visit';
import { CommonService } from '../../core/services/common.service';
import { VisitService } from '../../core/services/visit.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
})
export class MedicineListComponent implements OnInit {
  @Input() visit: Visit;
  @Input() mode: 'EDIT' | 'VIEW' = 'EDIT';
  visitMedicines: VisitMedicine[] = [];

  duplicate = false;

  // lista dostępnych leków
  medicineList: Medicine[] = [];

  // nazwa wybranego leku
  selectedMed: Medicine;

  // liczba jednostek wybranego leku
  selectedAmount: number;

  submitted = false;

  form: FormGroup;

  medicines: Medicine[] = [];

  constructor(private activeModal: NgbActiveModal, private commonService: CommonService, private visitService: VisitService) {
  }

  ngOnInit(): void {
    this.refreshData();
  }

  add() {
    const medToDelete = this.medicines.find(m => m.name === this.selectedMed.name);
    this.visitService.addMedicineToVisit(this.visit.idVisit, medToDelete.idMedicines, this.selectedAmount).subscribe(
      res => {
        this.refreshData();
        this.medicineList.length > 0 ? this.selectedMed = this.medicineList[0] : this.selectedMed = null;
      },
      err => {
      }
    );
  }

  // delete(medicine: VisitMedicine) {
  //   // this.model.splice(this.model.indexOf(medicine), 1);
  //   this.visitService.deleteMedicineInVisit(medicine).subscribe(
  //     res => {
  //       this.refreshData();
  //       this.medicineList.length > 0 ? this.selectedMed = this.medicineList[0] : this.selectedMed = null;
  //     },
  //     err => {
  //     }
  //   );
  // }


  private getPropertyList() {
    this.medicines.forEach(v => {
      if (!this.visitMedicines || !this.visitMedicines.find(m => m.medicine.name === v.name)) {
        this.medicineList.push(v);
      }
    });
  }

  refreshData() {
    this.visitService.getVisitMedicines(this.visit.idVisit).subscribe((data) => {
      this.visitMedicines = data as VisitMedicine[];
      this.commonService.getDictionary('MEDICINES').subscribe(dictionary => {
        this.medicines = Object.keys(dictionary).map((key) => dictionary[key] as Medicine);
        this.getPropertyList();
      },
        (error) => {
          console.log(error);
        });
    });
  }

  onDismiss() {
    this.activeModal.dismiss();
  }
}

