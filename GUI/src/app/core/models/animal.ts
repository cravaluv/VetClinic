import { Owner } from './owner';
import { Visit } from './visit';

export class Animal {
    idAnimal: number;
    name: string;
    birthDate: Date;
    active: boolean;
    color: Color;
    animalType: AnimalType;
    visits: Visit[] = [];


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
