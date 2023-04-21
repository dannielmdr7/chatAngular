import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socketStatus = false;
  private usuario: Usuario = new Usuario('');

  constructor(private socket: Socket) {
    this.cargarStorage();
    this.checkStatus();
  }
  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al Servidor ');
      this.socketStatus = true;
    });
    this.socket.on('disconnect', () => {
      console.log('Desconectado del Servidor ');
      this.socketStatus = false;
    });
  };
  emit(evento: string, payload?: any, cb?: Function) {
    this.socket.emit(evento, payload, cb);
  }
  listen(evento: string) {
    return this.socket.fromEvent(evento)
  }

  // Configurar Usuario
  loginWS(nombre: string) {
    return new Promise((resolve, reject) => {
      this.emit('configurar-usuario', { nombre }, (resp: any) => {
        resolve(resp);
        this.usuario = new Usuario(nombre);
        this.guardarStorage()
      })
    })
  }

  getUsuario() {
    return this.usuario
  }

  guardarStorage() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario))
  }

  cargarStorage() {
    const savedUser = localStorage.getItem('usuario');
    if (savedUser) {
      this.usuario = JSON.parse(savedUser);
      this.loginWS(this.usuario.nombre);
    }
  }
}
