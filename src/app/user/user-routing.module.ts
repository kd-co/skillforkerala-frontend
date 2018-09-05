import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreatedComponent } from './account-created/account-created.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { MessageSentComponent } from './message-sent/message-sent.component';

const routes: Routes = [
  {
    path: 'profile-created',
    component: AccountCreatedComponent,
  },
  {
    path: 'send-message/:profile-id',
    component: SendMessageComponent,
  },
  {
    path: 'message-sent',
    component: MessageSentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
