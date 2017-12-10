import { Address } from './address';

export class Owner {
    idOwner: number;
    name: string;
    surname: string;
    tel: string;
    onlineReg: boolean;
    login?: string;
    password?: string;
    address: Address;

    constructor() {
        this.address = new Address();
    }
}
