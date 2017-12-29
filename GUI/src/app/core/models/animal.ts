import { Owner } from './owner';

export class Animal {
    idAnimal: number;
    name: string;
    birthDate: Date;
    active: boolean;
    color: Color;
    animalType: AnimalType;


    constructor() {
        this.color = new Color();
        this.animalType = new AnimalType();
    }
}

export class Color {
  idColor: number;
  color: string;
}

export class AnimalType {
  idAnimalType: number;
  type: string;
}
