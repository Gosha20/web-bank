import { Component, OnInit , ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-payments-request',
  templateUrl: './payments-request.component.html',
  styleUrls: ['./payments-request.component.css']
})
export class PaymentsRequestComponent implements OnInit {
  public person: Object;

  @ViewChild('myForm') slForm: NgForm;
  private NDS: String = "без НДС";

  constructor(private http: HttpClient) { 
    this.person = {
      name : 'Щвецова Мария Валерьевна',
      number: 8919397777,
      email: 'mary@tochka.com',
      site: 'www.mary.com',
      company: 'Индивидульный предприниматель'
    }
  }
  onSubmit(form: NgForm) {
    var tempForm = form.value;
    tempForm["nds"] = this.NDS;
    console.log(tempForm);

    // this.http.post("http://localhost:5000/bank/pay-request", form.value).subscribe(
    //   (response: any) => {console.log(response);}
    // );
    // form.reset();

}
  ngOnInit() {
    
      // const head = new HttpHeaders().set('Content-Type', 'application/json') ;
      
      // this.http.post("http://localhost:5000/bank/pay-request",JSON.stringify({
      //   "inn": "111111111111",
      //   "bik": "111111111",
      //   "accountNumber": "11111111111111111111",
      //   "nds": "18%",
      //   "count": "11111",
      //   "email": "angular@gmail.com",
      //   "telNumber": "+79122694132"
      // }), {responseType: 'json', headers:head}).subscribe((resp: any) => console.log(resp));
  }

  private choseNDS(nds: String): void
  { 
    this.NDS = nds;
  }

}
