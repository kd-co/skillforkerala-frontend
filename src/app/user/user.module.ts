import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../_core/core.module';
import { UserRoutingModule } from './user-routing.module';
import { AccountCreatedComponent } from './account-created/account-created.component';
import { SendMessageComponent } from './send-message/send-message.component';

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
     SendMessageComponent,
  ],
  exports: [
      // LandingComponent
  ]
})
export class UserModule {
}
