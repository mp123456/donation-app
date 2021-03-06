import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Donation } from "../models/donation";
import { Store } from "../modules/core/store";

export class DonationState {
    donations: Donation[]

  }
  
  const INITIAL_ROOT_STATE: DonationState = {
    donations:[]
  }
  
  
  @Injectable({
    providedIn: 'root',
  })
  export class DonationStoreService extends Store<DonationState>  {
  
    constructor() {
      super('RequestDetailsState', INITIAL_ROOT_STATE);
    }

    getDonationsList():Observable<Donation[]>{
      return this.select(s=>s.donations);
    }
    setDonationsList(list:Donation[]){
      this.setState('',s=>({...s,donations:list}))  
    }

    addDonation(item:Donation){
      this.setState('',s=>({...s,donations:[...s.donations,item]}))
    }

    editDonation(item:Donation){
      let cloneItem=Object.assign(item);
      let index = this.getSnapshot()
      .donations.map((x) => x.id)
      .indexOf(item.id);
    this.setState('', (s) => ({
      ...s,
      donations: [
        ...s.donations.slice(0, index),
        cloneItem,
        ...s.donations.slice(index + 1),
      ],
    }));
    }

    deleteDonation(id:number){
      let index = this.getSnapshot()
      .donations.map((x) => x.id)
      .indexOf(id);
    this.setState('', (s) => ({
      ...s,
      donations: [
        ...s.donations.slice(0, index),
        ...s.donations.slice(index + 1),
      ],
    }));
    }
    


  }
