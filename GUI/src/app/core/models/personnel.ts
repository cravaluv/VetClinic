import { Address } from './address';
import { Visit } from './visit';

export class Personnel {
  private idPersonnel: number;
  private name: string;
  private surname: string;
  private login: string;
  private address: Address;
  private roles: Role[];
  private schedules: Schedule[];
  private visits: Visit[];

  constructor() {
    this.address = new Address();
    this.roles = [];
    this.schedules = [];
    this.visits = [];
  }
}

export class Role {
  private idRole: number;
  private name: string;
  private personnels: Personnel[];
}

export class Schedule {
  private idSchedule: number;
  private date: Date;
  private personnel: Personnel;
}
