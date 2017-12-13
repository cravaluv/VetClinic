import { Owner } from './owner';

export class Animal {
    idAnimal: number;
    name: string;
    birthDate: Date;
    active: boolean;
    owner: Owner;
    // login?: string;
    // password?: string;
    // address: Address;

    constructor() {
        this.owner = new Owner();
    }
}
