import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaratulaPage } from './caratula.page';

const routes: Routes = [
  {
    path: '',
    component: CaratulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaratulaPageRoutingModule {}
