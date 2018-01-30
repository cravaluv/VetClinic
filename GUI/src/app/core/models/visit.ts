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
  idMedicine?: number;
  idVisit?: number;
  name: string;
  amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}

export class Disease {
  idDisease: number;
  name: string;
  description: string;
}

export class Medicine {
  idMedicine: number;
  name: string;
  amount: number;
  minAmount: number;

  constructor(name, amount, minAmount) {
    this.name = name;
    this.amount = amount;
    this.minAmount = minAmount;
  }

}

export class VisitType {
  idVisitType: number;
  type: string;
}
