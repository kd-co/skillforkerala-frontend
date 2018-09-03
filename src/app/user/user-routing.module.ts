import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreatedComponent } from './account-created/account-created.component';

const routes: Routes = [
  {
    path: 'profile-created',
    component: AccountCreatedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
