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

    addAnimal(animal: Animal) {
        const endPoint = 'add';
        return this.http.post(this.animalUrl + endPoint, animal).subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            }
          );
    }

    update(animal: Animal) {
        const endPoint = 'update/';
        return this.http.post(this.animalUrl + endPoint + animal.idAnimal, animal).subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            }
          );
    }
}

