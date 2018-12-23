import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../bank/http-service.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  // view full info about pays
  constructor(private http: HttpServiceService) { }

  ngOnInit() {
  }

 
}
