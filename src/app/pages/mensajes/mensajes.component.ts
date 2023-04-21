import { Component } from '@angular/core';
import { Usuario } from 'src/app/classes/usuario';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  usuario:Usuario;
  constructor(private wsService:WebsocketService){
    this.usuario = wsService.getUsuario()
  }

}
