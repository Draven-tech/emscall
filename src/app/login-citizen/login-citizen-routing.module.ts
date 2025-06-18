import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginCitizenPage } from './login-citizen.page';

const routes: Routes = [
  {
    path: '',
    component: LoginCitizenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginCitizenPageRoutingModule {}
