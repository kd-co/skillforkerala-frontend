import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  // styleUrls: ['../../../assets/css/sidebar-section.scss', ],
  providers: [LoginService]
})
export class LandingComponent {

  showLoginModal: boolean = false;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  loginWithFacebook(): void {
    this.loginService
      .loginWithFacebook(user => alert("Welcome " + user.name))
  }
}
