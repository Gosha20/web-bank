import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: Boolean = false;
  constructor() { }

  public login(login, password) {
    // get request to backend 
    if (login === "admin" && password == 123)
      {
        this.isAuth = true;
        return true;
      }
    else
      {return false;}

  }
}
