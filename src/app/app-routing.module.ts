import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeteoFormComponent} from './meteo-form/meteo-form.component';

const routes: Routes = [
  {
    path: '',
    component: MeteoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
