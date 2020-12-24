import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { DonationListComponent } from './components/donation-list/donation-list.component';
import { DonationFormComponent } from './components/donation-form/donation-form.component';
import { MatInputModule } from  '@angular/material/input';
import { BidiModule } from '@angular/cdk/bidi';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DonationService } from './services/donation.service';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AsyncPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DonationListComponent,
    DonationFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    BidiModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [ DonationFormComponent ],
  providers: [DonationService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
