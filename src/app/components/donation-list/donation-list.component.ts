import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Donation } from '../../models/donation';
import { SelectItem } from '../../models/selectItem';

@Component({
  selector: 'donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class DonationListComponent implements OnInit,OnChanges  {

  @Input() list:Donation[];
  data:Donation[];
  @Input() countriesTypes:SelectItem[];
  @Input() currencies:any[];
  @Output() save: EventEmitter<Donation>= new EventEmitter<Donation>();
  @Output() delete: EventEmitter<Donation>= new EventEmitter<Donation>();

  countryTypeControl= new FormControl('');
  currencyControl=new FormControl('');
  constructor() {
   
   }
  ngOnChanges(changes: SimpleChanges): void {
     this.data=[];
    this.list.forEach(val => this.data.push(Object.assign({},val)));
  }

  ngOnInit() {
  }



}
