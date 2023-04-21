import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private websocketService: WebsocketService,
    private chatService: ChatService
  ) { }
  ngOnInit(): void {
    this.chatService.getPrivateMessages().subscribe((msg) => {
      console.log(msg);
    })
  }
}
