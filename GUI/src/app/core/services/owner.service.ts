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

    addOwner(owner: Owner) {
        const endPoint = 'add';
        return this.http.post(this.ownerUrl + endPoint, owner);
    }

    update(owner: Owner) {
        const endPoint = 'update/';
        return this.http.post(this.ownerUrl + endPoint + owner.idOwner, owner);
    }

    getOwnerAnimals(ownerId: number | string) {
        const endPoint = `/${ownerId}/animals`;
        return this.http.get(this.ownerUrl + endPoint);
    }

    getOwnerById(ownerId: number | string) {
        const endPoint = `/${ownerId}`;
        return this.http.get(this.ownerUrl + endPoint);
    }

    delete(ownerId: number) {
        const endPoint = `delete/${ownerId}`;
        return this.http.delete(this.ownerUrl + endPoint);
      }
}

