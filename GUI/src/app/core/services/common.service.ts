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
export class CommonService {
    constructor(private http: HttpClient) {
    }
    private url = 'http://localhost:8080/';


    getDictionary(mode: 'MEDICINES' | 'COLORS' | 'DISEASTERS' | 'ANIMAL_TYPES' | 'VISIT_TYPES') {
        const endPoint = mode.toLowerCase() + '/all';
        return this.http.get(this.url + endPoint);
    }

    saveDictionary(mode: 'MEDICINES' | 'COLORS' | 'DISEASTERS' | 'ANIMAL_TYPES' | 'VISIT_TYPES', dictionary) {
        const endPoint = mode.toLowerCase() + '/update';
        return this.http.post(this.url + endPoint, dictionary);
    }

    // addAnimal(animal: Animal) {
    //     const endPoint = 'add';
    //     return this.http.post(this.url + endPoint, animal).subscribe(
    //         res => {
    //           console.log(res);
    //         },
    //         err => {
    //           console.log("Error occured");
    //         }
    //       );
    // }

    // update(animal: Animal) {
    //     const endPoint = 'update/';
    //     return this.http.post(this.animalUrl + endPoint + animal.idAnimal, animal).subscribe(
    //         res => {
    //           console.log(res);
    //         },
    //         err => {
    //           console.log("Error occured");
    //         }
    //       );
    // }
}

