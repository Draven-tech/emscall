import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginCitizenPageRoutingModule } from './login-citizen-routing.module';

import { LoginCitizenPage } from './login-citizen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCitizenPageRoutingModule
  ],
  declarations: [LoginCitizenPage]
})
export class LoginCitizenPageModule {}
