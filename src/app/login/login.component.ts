import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    let toSend = form.value;
    let isAdmin = this.authService.login(toSend['login'], toSend['password']);
    if (isAdmin) {
      console.log("admin");
      this.route.navigate(["admin"]);
    }
    else {
      console.log("neadmin");
      form.reset();
    }
  }
}
