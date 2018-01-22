import { Personnel } from './personnel';
import { Animal } from './animal';

export class Visit {
  idVisit: number;
  date: Date;
  type: string;
  description: string;
  medicines: VisitMedicine[];
  diseases: Disease[];
  animal: Animal;
  personnel: Personnel;

  constructor() {
    this.medicines = [];
    this.diseases = [];
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
  description: string;
  totalAmount: number;
  minAmout: number;
}
