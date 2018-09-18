import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { CoreModule } from './_core/core.module';
// import { AngularTokenModule } from 'angular-token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    HomeModule,
    UserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // AngularTokenModule.forRoot({})
  ],
  providers: [
    // AngularTokenModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
