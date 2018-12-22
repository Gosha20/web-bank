import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('http://localhost:5000/bank/user');
  }

  addPaymentRequest(payment: Object) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.http.post(
      "http://localhost:5000/bank/pay-request",
      JSON.stringify(payment),
      {
        responseType: 'json',
        headers: myHeaders
      });
  }

  addPaymentCard(payment: Object) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.http.post(
      "http://localhost:5000/bank/pay-card",
      JSON.stringify(payment),
      {
        responseType: 'json',
        headers: myHeaders
      });
  }

  addPaymentBank(payment: Object) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.http.post(
      "http://localhost:5000/bank/pay-bank",
      JSON.stringify(payment),
      {
        responseType: 'json',
        headers: myHeaders
      });
  }
}
