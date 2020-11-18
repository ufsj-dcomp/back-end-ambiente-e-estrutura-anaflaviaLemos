import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { ReservaComponent } from './reserva/reserva.component';

const routes: Routes = [];
  {path: 'hotel', component: HotelComponent },
  {path: 'reserva', component: ReservaComponent }
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
