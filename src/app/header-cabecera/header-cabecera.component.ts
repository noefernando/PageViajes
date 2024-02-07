import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-header-cabecera',
  templateUrl: './header-cabecera.component.html',
  styleUrls: ['./header-cabecera.component.sass']
})
export class HeaderCabeceraComponent implements OnDestroy{
  mostrarLoginOK:boolean = false
  userData: Observable<any>;

  constructor(private userService:UserService){
    this.userData = this.userService.getUserData();
  }

  users(){
    
  }
  loginOK(){
    this.mostrarLoginOK = true
/*     document.body.style.overflow = 'hidden';
 */  }
  cerrarLoginOK(){
    this.mostrarLoginOK = false
/*     document.body.style.overflow = 'visible';
 */  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}