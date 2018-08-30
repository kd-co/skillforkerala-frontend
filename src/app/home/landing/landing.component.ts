import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  // styleUrls: ['../../../assets/css/sidebar-section.scss', ]
})
export class LandingComponent {

  showLoginModal: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
