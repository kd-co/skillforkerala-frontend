import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    // CoreModule,
    // SharedModule,
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    HomeRoutingModule,
  ],
  declarations: [
      LandingComponent,
  ],
  exports: [
      // LandingComponent
  ]
})
export class HomeModule {
}
