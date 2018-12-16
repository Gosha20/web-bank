import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PaymentsRequestComponent } from './payments/payments-request/payments-request.component';
import { PaymentsPayComponent } from './payments/payments-pay/payments-pay.component';
import {ByCardComponent} from './payments/payments-pay/by-card/by-card.component';

const routes: Routes = [
  {path:"", redirectTo: 'payments-request', pathMatch: "full"},
  {path: "payments-request", component: PaymentsRequestComponent},
  {path: "payments-pay", component: PaymentsPayComponent},
  {path: "payments-pay/by-card", component: ByCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
