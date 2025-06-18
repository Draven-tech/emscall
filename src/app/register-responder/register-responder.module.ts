import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterResponderPageRoutingModule } from './register-responder-routing.module';

import { RegisterResponderPage } from './register-responder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterResponderPageRoutingModule
  ],
  declarations: [RegisterResponderPage]
})
export class RegisterResponderPageModule {}
