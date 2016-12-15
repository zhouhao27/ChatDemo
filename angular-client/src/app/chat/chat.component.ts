import { Component, OnInit , OnDestroy, NgZone } from '@angular/core';
import { ChatService } from '../services/chat.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[ChatService]
})
export class ChatComponent implements OnInit {
  messages : any[] = []
  private messageValue = ""   // current message being sent, binding

  constructor(private chatSvc: ChatService, private zone: NgZone) {}

  ngOnInit() {
    this.chatSvc.startUpdate()
      .subscribe( message => {
        this.zone.run(() => {
          this.messages.unshift(message)
        })
      })
  }

  ngOnDestroy() {
    this.chatSvc.stopUpdate()
  }

  sendMessage(message: string) {
    this.chatSvc.sendMessage(message)
      .subscribe( success => {

      }, error => {
        alert(error)
      },() => {
        this.messageValue = ''
      })
  }

  getMessageClass(message) {
    if (message.me) {
      return 'right'
    } else {
      return 'left'
    }
  }
}
