import { Component, OnInit , ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-payments-request',
  templateUrl: './payments-request.component.html',
  styleUrls: ['./payments-request.component.css']
})
export class PaymentsRequestComponent implements OnInit {
  public person: Object;
  @ViewChild('f') slForm: NgForm;
  constructor() { 
    this.person = {
      name : 'Щвецова Мария Валерьевна',
      number: 8919397777,
      email: 'mary@tochka.com',
      site: 'www.mary.com',
      company: 'Индивидульный предприниматель'
    }
  }
  onSubmit(form: NgForm) {
    form.reset();
}
  ngOnInit() {
  }

}
