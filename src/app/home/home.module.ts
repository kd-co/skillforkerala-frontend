import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../_core/core.module';
import { HomeRoutingModule } from './home-routing.module';

import { LandingComponent } from './landing/landing.component';
import { PledgeComponent } from './pledge/pledge.component';

@NgModule({
  imports: [
    CoreModule,
    // SharedModule,
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    HomeRoutingModule,
  ],
  declarations: [
      LandingComponent,
      PledgeComponent,
  ],
  exports: [
      // LandingComponent
  ]
})
export class HomeModule {
}
