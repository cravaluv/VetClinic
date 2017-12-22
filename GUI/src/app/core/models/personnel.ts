import { Address } from './address';
import { Visit } from './visit';

export class Personnel {
  idPersonnel: number;
  name: string;
  surname: string;
  login: string;
  address: Address;
  roles: Role[];
  schedules: Schedule[];
  visits: Visit[];

  constructor() {
    this.address = new Address();
    this.roles = [];
    this.schedules = [];
    this.visits = [];
  }
}

export class Role {
  idRole: number;
  name: string;
  personnels: Personnel[];
}

export class Schedule {
  idSchedule: number;
  date: Date;
  personnel: Personnel;
}
