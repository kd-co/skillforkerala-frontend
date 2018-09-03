import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../_core/core.module';
import { UserRoutingModule } from './user-routing.module';
import { AccountCreatedComponent } from './account-created/account-created.component';

@NgModule({
  imports: [
    CoreModule,
    // SharedModule,
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    UserRoutingModule,
  ],
  declarations: [
     AccountCreatedComponent,
  ],
  exports: [
      // LandingComponent
  ]
})
export class UserModule {
}
