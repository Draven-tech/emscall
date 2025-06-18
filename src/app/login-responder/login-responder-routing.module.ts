import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginResponderPage } from './login-responder.page';

const routes: Routes = [
  {
    path: '',
    component: LoginResponderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginResponderPageRoutingModule {}
