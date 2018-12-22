import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from './user';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})

export class PersonInfoComponent implements OnInit {
  public person: User;

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    this.http.get('http://localhost:5000/bank/user').subscribe((data:User) => this.person=data);
  }

}
