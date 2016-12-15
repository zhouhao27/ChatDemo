import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatService } from '../../services/chat.service'

import { Room } from '../home/room.model'
import { ChatMessage } from './chat-message.model'
// import { ChatBubble } from '../../components/chat/chat-bubble.component'
// import { ElasticTextarea } from '../../components/chat/elastic-textarea.component'

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  providers: [ChatService]
})
export class ChatPage {
  room: Room  // current room

  messages: ChatMessage[]

  constructor(public navCtrl: NavController,
    private params: NavParams,
    private chatSvc: ChatService,
    private zone: NgZone) {
    this.room = params.get('room')
    this.messages = []
  }

  // TODO: load historical chat message
  ionViewDidLoad() {
    console.log('Hello ChatPage Page');

    this.chatSvc.loadAll(this.room.id)
      .subscribe( all => {
        this.messages = all
        // monitor new chat message only
        this.chatSvc.joinRoom(this.room.id)
          .subscribe( message => {
            this.zone.run(() => {
              // this.messages.unshift(message)
              this.messages.push(message)
            })
          })
      })
  }

  ionViewDidUnload() {
    this.chatSvc.exitRoom(this.room.id)
  }

  sendMessage(txtChat) {
    this.chatSvc.sendMessage(this.room.id,txtChat.content)
      .subscribe( success => {
      }, error => {
        alert(error)
      },() => {
        txtChat.clearInput()
      })
  }

}
