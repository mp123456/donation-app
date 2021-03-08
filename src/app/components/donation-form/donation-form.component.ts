import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
 
  countryTypeControl= new FormControl('');
  currencyControl= new FormControl('');
  countryControl= new FormControl('');
  amountControl= new FormControl('');
   
  

  
  constructor(public dialogRef: MatDialogRef<DonationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
