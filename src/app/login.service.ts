import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

export interface User {
  id: string;
  email: string;
  name: string;
  image: string;
}

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  loginWithFacebook(callback: (user: User) => void): void {
    if(!window["FB"])
      return;

    window["FB"].login(({authResponse}) => {
      return this.http.get<User>("/users/auth/facebook/callback", {
        headers: new HttpHeaders({
          "Accept": 'application/json'
        })
      }).subscribe((data: User) => callback(data))
    })
  }
}
