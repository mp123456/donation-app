import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { Donation } from "../models/donation";
import { DonationStoreService } from "./donation.store.service";

@Injectable()
export class DonationService{
  
    /**
     *
     */
    constructor(private http: HttpClient, private donationStoreService: DonationStoreService) {
       

    }

    getCurrencies(): Observable<any[]> {
        return this.http.get<any>("./assets/currency.json");
    }
    getDonationsList(){
        this.http.get<Donation[]>("http://localhost:62127/Donation/Get").pipe(take(1))
        .subscribe((res:Donation[])=>{
            this.donationStoreService.setDonationsList(res);
        });
    }
    addDonation(item:Donation){
        this.http.post("http://localhost:62127/Donation/Add",item).pipe(take(1))
        .subscribe((res)=>{
           console.log(res);
        });
    }

    editDonation(item: Donation) {
        this.http.post("http://localhost:62127/Donation/Update",item,{ headers: new HttpHeaders({'Authorization': 'Bearer token'}) }).pipe(take(1))
        .subscribe((res)=>{
           console.log(res);
        });
      }
}