import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import { HotelComponent, } from './hotel/hotel.component';
import { ReservaComponent } from './reserva/reserva.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { Globals } from './globals/globals';
import { ServiceComponent } from './service/service.component';
import { AuthserviceComponent } from './authservice/authservice.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    ReservaComponent,
    AuthComponent,
    HomeComponent,
    ServiceComponent,
    AuthserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule
  ],

  
  providers: [AuthGuard, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
