import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {NavbarComponent} from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [NavbarComponent, ModalComponent],
  exports: [NavbarComponent, ModalComponent],
  providers: [
  ]
})
export class CoreModule {
  constructor() {

  }
}
