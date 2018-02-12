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
        return this.http.post(this.personnelUrl + endPoint, personnel);
    }

    update(personnel: Personnel) {
        const endPoint = 'update/';
        return this.http.put(this.personnelUrl + endPoint + personnel.idPersonnel, personnel);
    }

    delete(personnelId: number) {
      const endPoint = `delete/${personnelId}`;
      return this.http.delete(this.personnelUrl + endPoint);
    }
}

