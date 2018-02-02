import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Animal } from '../models/animal';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../models/owner';

interface ItemsResponse {
    results: any[];
}

@Injectable()
export class AnimalService {
    constructor(private http: HttpClient) {
    }
    private animalUrl = 'http://localhost:8080/animals/';

    getAnimals() {
        const endPoint = 'all';
        return this.http.get(this.animalUrl + endPoint);
    }

    addAnimal(animal: Animal, idOwner: number) {
        const endPoint = 'add/' + idOwner;
        return this.http.post(this.animalUrl + endPoint, animal);
    }

    update(animal: Animal) {
        const endPoint = 'update/';
        return this.http.put(this.animalUrl + endPoint + animal.idAnimal, animal);
    }

    getAnimalVisits(animalId: number) {
      const endPoint = 'visits/' + animalId;
      return this.http.get(this.animalUrl + endPoint);
  }

}

