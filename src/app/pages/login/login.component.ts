import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre = '';
  constructor(
    private WSService:WebsocketService,
    private router:Router
    ){

  }

  ingresar() {
    this.WSService.loginWS(this.nombre).then(()=>{
      this.router.navigateByUrl('/mensajes')

    })
  }

}
