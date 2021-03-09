import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { DonationFormComponent } from './components/donation-form/donation-form.component';
import { Donation } from './models/donation';
import { SelectItem } from './models/selectItem';
import { DonationService } from './services/donation.service';
import { DonationStoreService } from './services/donation.store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  $donationList:Observable<Donation[]>;
  countriesTypes:SelectItem[];
  $currencies:Observable<any[]>;
  currencies:any[];

  
  constructor(private donationStoreService: DonationStoreService, private donationService: DonationService, public dialog: MatDialog) {

     this.$donationList=this.donationStoreService.getDonationsList();
     this.countriesTypes=[{label:"סוג 1",value:"1"},{label:"סוג 2",value:"2"}];
     this.$currencies= this.donationService.getCurrencies();
  }
  ngOnInit(): void {
    this.donationService.getCurrencies().pipe(
      take(1)
    ).subscribe(res=>{
      this.currencies=res;
    })

    this.donationService.getDonationsList();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DonationFormComponent, {
      width: '50%',
      data: {item:new Donation(), currencies:this.currencies , countriesTypes:this.countriesTypes}
    });

    dialogRef.afterClosed().subscribe((result:Donation) => {
      if(result!=null){
      let id = this.donationStoreService.getSnapshot().donations.length+1;
      result.id=id;
     this.donationStoreService.addDonation(Object.assign({}, result));
     this.donationService.addDonation(this.convertStringToInt(result));
      }
     
    });
  }

  saveEditItem(item:Donation){
    if(item!=null && item.countryName!=null){
      this.donationStoreService.editDonation(item);
      this.donationService.editDonation(this.convertStringToInt(item));
    }
    
  }
  deleteItem(item:Donation){
    
      this.donationStoreService.deleteDonation(item.id);
    
  }
  convertStringToInt(item:Donation){
    return Object.assign({}, {...item,amount: +item.amount, conversionRate:+item.conversionRate,countrtType:+item.countrtType})
  }
}

