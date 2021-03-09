import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Donation } from '../../models/donation';
import { SelectItem } from '../../models/selectItem';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DonationFormComponent implements OnInit {

  @Input() countriesTypes:SelectItem[];
  @Input() currencies:any[];
 
  /* countryTypeControl= new FormControl('');
  currencyControl= new FormControl('');
  countryControl= new FormControl('');
  amountControl= new FormControl('');
    */
  donationForm = new FormGroup({
    countryName:new FormControl('',[Validators.required, Validators.pattern("^[a-z\\u0590-\\u05fe ]+$")]),
    countrtType: new FormControl('', [Validators.required]),
    purpose:new FormControl('',[Validators.required, Validators.pattern("^[a-z\\u0590-\\u05fe ]+$")]),
    conditions:new FormControl('',[Validators.pattern("^[a-z\\u0590-\\u05fe ]+$")]),
    currency:new FormControl('',Validators.required),
    conversionRate:new FormControl('',[Validators.required,Validators.pattern("^\\d+(\\.\\d{1,2})?$")]),
    amount:new FormControl('',[Validators.required,Validators.pattern("^\\d+(\\.\\d{1,2})?$")])

  });


  
  constructor(public dialogRef: MatDialogRef<DonationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  clearForm(){
    this.donationForm.reset();
  }

}
