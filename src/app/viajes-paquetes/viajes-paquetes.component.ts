import { Component } from '@angular/core';

@Component({
  selector: 'app-viajes-paquetes',
  templateUrl: './viajes-paquetes.component.html',
  styleUrls: ['./viajes-paquetes.component.sass']
})
export class ViajesPaquetesComponent {
  mostrarHotel: boolean = false
  mostrarLogin:boolean = false
  view(){
    this.mostrarHotel = true
    this.mostrarLogin = false
    document.body.style.overflow = 'hidden';
  }
  cerrar(){
    this.mostrarHotel = false
    this.mostrarLogin = false
    document.body.style.overflow = 'visible';
  }
  login(){
    this.mostrarLogin = true
    document.body.style.overflow = 'hidden';
  }
  cerrarLogin(){
    this.mostrarLogin = false
    document.body.style.overflow = 'visible';
  }
}


