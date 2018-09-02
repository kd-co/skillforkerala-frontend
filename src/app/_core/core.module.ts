import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {NavbarComponent} from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete'
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete'


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [NavbarComponent, ModalComponent, GooglePlaceDirective],
  exports: [NavbarComponent, ModalComponent, GooglePlaceDirective],
  providers: [
  ]
})
export class CoreModule {
  constructor() {

  }
}
