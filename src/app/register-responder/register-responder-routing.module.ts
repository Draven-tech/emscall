import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterResponderPage } from './register-responder.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterResponderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterResponderPageRoutingModule {}
