import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCitizenPage } from './register-citizen.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterCitizenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterCitizenPageRoutingModule {}
