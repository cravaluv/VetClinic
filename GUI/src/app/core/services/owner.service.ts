import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Owner } from '../models/owner';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

interface ItemsResponse {
    results: any[];
}

@Injectable()
export class OwnerService {
    constructor(private http: HttpClient) {
    }
    private ownerUrl = 'http://localhost:8080/owners/';

    getOwners() {
        const endPoint = 'all';
        return this.http.get(this.ownerUrl + endPoint);
    }
}

