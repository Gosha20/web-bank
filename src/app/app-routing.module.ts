import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PaymentsRequestComponent } from './payments/payments-request/payments-request.component';
import { PaymentsPayComponent } from './payments/payments-pay/payments-pay.component';
import {ByCardComponent} from './payments/payments-pay/by-card/by-card.component';
import {ByInternetBankComponent} from './payments/payments-pay/by-internet-bank/by-internet-bank.component'
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:"", redirectTo: 'payments-pay/by-card', pathMatch: "full"},
  {path: "payments-request", component: PaymentsRequestComponent},
  {path: "payments-pay",  redirectTo: 'payments-pay/by-card', pathMatch: "full"},
  {path: "payments-pay/by-card", component: ByCardComponent},
  {path: "payments-pay/by-internet-bank", component: ByInternetBankComponent},
  {path: "login", component: LoginComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
