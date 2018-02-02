import { Personnel } from './personnel';
import { Animal } from './animal';

export class Visit {
  idVisit: number;
  date: Date;
  visitType: VisitType;
  description: string;
  medicines: VisitMedicine[] = [];

  constructor() {
    this.visitType = new VisitType();
  }
}

export class VisitMedicine {
  medicine: Medicine;
  amount: number;
  visit: Visit;

  constructor(amount: number, medicine: Medicine, visit: Visit) {
    this.medicine = medicine;
    this.amount = amount;
    this.visit = visit;
  }
}

export class Medicine {
  idMedicines: number;
  name: string;
  amount: number;
  minNumber: number;

  constructor(name, amount, minNumber) {
    this.name = name;
    this.amount = amount;
    this.minNumber = minNumber;
  }

}

export class VisitType {
  idVisitType: number;
  type: string;
}
