import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaratulaPageRoutingModule } from './caratula-routing.module';

import { CaratulaPage } from './caratula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaratulaPageRoutingModule
  ],
  declarations: [CaratulaPage]
})
export class CaratulaPageModule {}
