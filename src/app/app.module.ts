import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCabeceraComponent } from './header-cabecera/header-cabecera.component';
import { FooterGeneralComponent } from './footer-general/footer-general.component';
import { ViajesPaquetesComponent } from './viajes-paquetes/viajes-paquetes.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { ViajesHotelComponent } from './viajes-hotel/viajes-hotel.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderCabeceraComponent,
    FooterGeneralComponent,
    ViajesPaquetesComponent,
    ViajesHotelComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
