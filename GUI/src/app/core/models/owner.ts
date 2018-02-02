import { Address } from './address';
import { Animal } from './animal';

export class Owner {
    idOwner: number;
    name: string;
    surname: string;
    tel: string;
    onlineReg: boolean;
    login?: string;
    address?: Address;
    animals: Animal[] = [];

    constructor() {
        this.address = new Address();
    }
}
