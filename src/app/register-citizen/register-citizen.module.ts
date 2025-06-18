import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterCitizenPageRoutingModule } from './register-citizen-routing.module';

import { RegisterCitizenPage } from './register-citizen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterCitizenPageRoutingModule
  ],
  declarations: [RegisterCitizenPage]
})
export class RegisterCitizenPageModule {}
