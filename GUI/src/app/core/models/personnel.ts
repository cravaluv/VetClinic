import { Address } from './address';
import { Visit } from './visit';

export class Personnel {
  idPersonnel: number;
  name: string;
  surname: string;
  login: string;
  password: string;
  address: Address;
  role: Role;

  constructor() {
    this.address = new Address();
    this.role = new Role();
  }
}

export class Role {
  idRole: number;
  name: string;

  constructor() {
    this.idRole = 2;
    this.name = 'employee';
  }
}
