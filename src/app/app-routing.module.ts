import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PaymentsRequestComponent } from './payments/payments-request/payments-request.component';

const routes: Routes = [
  {path:"", redirectTo: 'payments-request', pathMatch: "full"},
  {path: "payments-request", component: PaymentsRequestComponent},
  {path: "payments-pay", component: PaymentsRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
