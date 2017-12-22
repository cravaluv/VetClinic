import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Personnel } from '../models/personnel';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

interface ItemsResponse {
    results: any[];
}

@Injectable()
export class PersonnelService {
    constructor(private http: HttpClient) {
    }
    private personnelUrl = 'http://localhost:8080/personnel/';

    getPersonnel() {
        const endPoint = 'all';
        return this.http.get(this.personnelUrl + endPoint);
    }

    addPersonnel(personnel: Personnel) {
        const endPoint = 'add';
        return this.http.post(this.personnelUrl + endPoint, personnel).subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            }
          );
    }

    update(personnel: Personnel) {
        const endPoint = 'update/';
        return this.http.post(this.personnelUrl + endPoint + personnel.idPersonnel, personnel).subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            }
          );
    }
}

