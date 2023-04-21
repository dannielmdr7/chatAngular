import { Usuario } from '../classes/usuario';
import { WebsocketService } from './websocket.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: Usuario;
  constructor(private websocketService: WebsocketService) {
    this.user = this.websocketService.getUsuario()
  }

  sendMessage(mensaje: string) {
    const payload = {
      de: this.user.nombre,
      cuerpo: mensaje
    };
    this.websocketService.emit('mensaje', payload);
  }

  getMessages() {
    return this.websocketService.listen('mensaje-nuevo')
  }

  getPrivateMessages() {
    return this.websocketService.listen('mensaje-privado'  );
  }

}
