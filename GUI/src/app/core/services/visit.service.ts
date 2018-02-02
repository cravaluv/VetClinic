import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Visit, VisitMedicine, Medicine } from '../models/visit';
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

    addVisit(visit: Visit, animalId: number) {
        const endPoint = 'add/' + animalId;
        return this.http.post(this.visitUrl + endPoint, visit);
    }

    update(visit: Visit) {
        const endPoint = 'update/'  + visit.idVisit;
        return this.http.put(this.visitUrl + endPoint, visit);
    }

    getAnimalByVisitId(id: number) {
      const endPoint = id + '/animal/';
      return this.http.get(this.visitUrl + endPoint);
    }

    getVisitsByCurrentWeek() {
      const endPoint = 'current_week';
      return this.http.get(this.visitUrl + endPoint);
    }

    getVisitsByDate(date: string) {
      const endPoint = 'day/' + date;
      return this.http.get(this.visitUrl + endPoint);
    }

    getVisitMedicines(id: number) {
      const endPoint = id + '/medicines/';
      return this.http.get(this.visitUrl + endPoint);
    }

    addMedicineToVisit(idVisit: number, idMedicine: number, amount: number) {
      const endPoint  = `${idVisit}/add/medicine/${idMedicine}`;
      return this.http.post(this.visitUrl + endPoint, amount);
    }

    getTodayVisits() {
      const endPoint  = 'today';
      return this.http.get(this.visitUrl + endPoint);
    }

    // deleteMedicineInVisit(visitMedicine: VisitMedicine) {
    //   const endPoint  = '/medicine/delete';
    //   return this.http.delete(this.visitUrl + endPoint, visitMedicine);
    // }
}

