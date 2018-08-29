import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {NavbarComponent} from './components/navbar/navbar.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [

  ]
})
export class CoreModule {
  constructor() {

  }
}
