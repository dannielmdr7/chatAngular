import { WebsocketService } from './websocket.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private websocketService: WebsocketService) { }

  sendMessage(mensaje: string) {
    const payload = {
      de: 'Daniel',
      cuerpo: mensaje
    };
    this.websocketService.emit('mensaje', payload);
  }
  getMessages() {
    return this.websocketService.listen('mensaje-nuevo')
  }

}
