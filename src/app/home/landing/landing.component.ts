import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
// import { AngularTokenService } from 'angular-token';
// import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  // styleUrls: ['../../../assets/css/sidebar-section.scss', ],
  providers: [LoginService]
})
export class LandingComponent {

  showLoginModal: boolean = false;
  formError = null;
  firstName: string;
  lastName: string;
  password: string;
  email: string;

  PROFILE_LIST_URL = `${environment.token_auth_config.apiBase}/profiles/`;
  EMAIL_SIGNUP_URL = `${environment.token_auth_config.apiBase}/users/`;
  EMAIL_LOGIN_URL = `${environment.token_auth_config.apiBase}/users/sign_in`;

  API_BASE = `${environment.token_auth_config.apiBase}`;

  constructor(private loginService: LoginService, private http: Http) {

    // this.authToken.init({
    //   apiBase: this.API_BASE,
    //   signInPath: 'users/sign_in',
    //   signInRedirect: '/',
    // });

    this.http.get(this.PROFILE_LIST_URL).subscribe(res =>{
      console.log(res.json());
    });
  }

  ngOnInit(): void {
  }

  signup(){
    this.validate();
    this.http.post(this.EMAIL_SIGNUP_URL, {
      first_name: this.firstName,
      last_name: this.lastName,
      password: this.password,
      email: this.email
    })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured", err);
        this.formError = err;
      }
    );
  }

  login(){
    this.http.post(this.EMAIL_LOGIN_URL, {
      email: 'drstrange@kamartaj.com',
      password: 'password'
    })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured", err);
        this.formError = err;
      }
    );

    // this.tokenService.signIn({
    //     login:    'example@example.org',
    //     password: 'secretPassword'
    // }).subscribe(
    //     res =>      console.log(res),
    //     error =>    console.log(error)
    // );

  }

  validate(){
    return;
  }

  loginWithFacebook(): void {
    this.loginService
      .loginWithFacebook(user => alert("Welcome " + user.name))
  }
}
