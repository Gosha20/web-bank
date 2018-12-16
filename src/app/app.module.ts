import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentsOptionComponent } from './payments/payments-option/payments-option.component';
import { PaymentsRequestComponent } from './payments/payments-request/payments-request.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonInfoComponent,
    PaymentsComponent,
    PaymentsOptionComponent,
    PaymentsRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
