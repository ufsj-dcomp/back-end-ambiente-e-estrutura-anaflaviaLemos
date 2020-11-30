import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { HotelComponent } from './hotel/hotel.component';
import { ReservaComponent } from './reserva/reserva.component';

const routes: Routes = [
  {path: '', component: AuthComponent },
  {path: 'home', component: HotelComponent, canActivate: [AuthGuard],
    children: [
      {path: 'hotel', component: HotelComponent },
      {path: 'reserva', component: ReservaComponent }
 
    ]
  },
  {path: 'auth', component: AuthComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
