import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Visit } from '../models/visit';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

interface ItemsResponse {
    results: any[];
}

@Injectable()
export class VisitService {
    constructor(private http: HttpClient) {
    }
    private visitUrl = 'http://localhost:8080/visits/';

    getVisits() {
        const endPoint = 'all';
        return this.http.get(this.visitUrl + endPoint);
    }

    addVisit(visit: Visit) {
        const endPoint = 'add';
        return this.http.post(this.visitUrl + endPoint, visit).subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            }
          );
    }

    update(visit: Visit) {
        const endPoint = 'update/';
        return this.http.post(this.visitUrl + endPoint + visit.idVisit, visit).subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            }
          );
    }
}

