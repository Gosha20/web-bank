import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
  public person: Object

  constructor() { 
    this.person = {
      name : 'Щвецова Мария Валерьевна',
      number: 8919397777,
      email: 'mary@tochka.com',
      site: 'www.mary.com',
      company: 'Индивидульный предприниматель'
    }
  }

  ngOnInit() {
  }

}
