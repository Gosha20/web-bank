import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})

export class PersonInfoComponent implements OnInit {
  public person: User;

  constructor(public httpService: HttpServiceService) {}

  ngOnInit() {
    this.httpService.getUser().subscribe((data: User) => this.person = data);
  }
}
