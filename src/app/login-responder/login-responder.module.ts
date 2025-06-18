import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginResponderPageRoutingModule } from './login-responder-routing.module';

import { LoginResponderPage } from './login-responder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginResponderPageRoutingModule
  ],
  declarations: [LoginResponderPage]
})
export class LoginResponderPageModule {}
