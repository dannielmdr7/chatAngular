import { ChatService } from './../../services/chat.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto = '';
  mensajes: any[] = [];
  mensajeSubscription: Subscription = new Subscription();
  divChats!: HTMLElement | null;
  constructor(private chatService: ChatService) {

  }
  ngOnInit(): void {
    this.divChats = document.getElementById('chat-mensajes');
    this.mensajeSubscription = this.chatService.getMessages().subscribe((msg) => {
      this.mensajes.push(msg);
      setTimeout(() => {
        if (this.divChats) {
          this.divChats.scrollTop = this.divChats.scrollHeight;
        }
      }, 50);
    });
  }
  ngOnDestroy(): void {
    this.mensajeSubscription.unsubscribe();
  }
  enviar() {
    if(this.texto.trim().length === 0) return;
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
