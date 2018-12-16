import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentsOptionComponent } from './payments/payments-option/payments-option.component';
import { PaymentsRequestComponent } from './payments/payments-request/payments-request.component';
import { FormsModule } from '@angular/forms';
import { PaymentsPayComponent } from './payments/payments-pay/payments-pay.component';
import { ByCardComponent } from './payments/payments-pay/by-card/by-card.component';
import { ByInternetBankComponent } from './payments/payments-pay/by-internet-bank/by-internet-bank.component';
import { OptionsComponent } from './payments/payments-pay/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonInfoComponent,
    PaymentsComponent,
    PaymentsOptionComponent,
    PaymentsRequestComponent,
    PaymentsPayComponent,
    ByCardComponent,
    ByInternetBankComponent,
    OptionsComponent
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
