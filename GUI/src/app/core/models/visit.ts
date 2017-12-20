import { Personnel } from './personnel';
import { Animal } from './animal';

export class Visit {
  idVisit: number;
  date: Date;
  type: string;
  description: string;
  medicines: Medicine[];
  vaccinations: Vaccination[];
  diseases: Disease[];
  animal: Animal;
  personnel: Personnel;

  constructor() {
    this.medicines = [];
    this.vaccinations = [];
    this.diseases = [];
  }
}

export class Medicine {
  idMedicine: number;
  name: string;
  description: string;
  amount: number;
  visits: Visit[];
}

export class Vaccination {
  idVaccination: number;
  name: string;
  amount: number;
  visits: Visit[];
}

export class Disease {
  idDisease: number;
  name: string;
  description: string;
  visits: Visit[];
}
