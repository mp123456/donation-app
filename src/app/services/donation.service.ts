import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DonationService{
    /**
     *
     */
    constructor(private http: HttpClient) {
       

    }

    getCurrencies(): Observable<any[]> {
        return this.http.get<any>("./assets/currency.json");
    }
}