import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Room } from '../home/room.model'
import { Message } from '../../models/message.module'
import { ChatBubble } from '../../components/chat/chat-bubble.component'
import { ElasticTextarea } from '../../components/chat/elastic-textarea.component'

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  room: Room
  messages: any[] = [
    {content:'Hello, are you there?',senderName:'John',position:'right',time:'3 min ago',img:'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png'},
    {content:'What can I do for you?',senderName:'Sally',position:'left',time:'2 min ago',img:'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png'},
    {content:'I want to buy a ticket for the concert',senderName:'John',position:'right',time:'2 min ago',img:'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png'},
    {content:'Nice!',senderName:'Tony',position:'left',time:'1 min ago',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png'},
    {content:'Hehehe...!',senderName:'Tony',position:'left',time:'3 seconds ago',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png'},
  ]

  constructor(public navCtrl: NavController, private params:NavParams) {
    this.room = params.get('room')
  }

  ionViewDidLoad() {
    console.log('Hello ChatPage Page');

    // let msg1 = new Message()
    // msg1.body = "Hello, are you there?"
    // msg1.me = true
    // msg1.user = "John"

    // let msg2 = new Message()
    // msg2.body = "What can I do for you?"
    // msg2.me = false
    // msg2.user = "Sally"

    // let msg3 = new Message()
    // msg3.body = "I want to buy a ticket for the concert"
    // msg3.me = true
    // msg3.user = "John"

    // let msg4 = new Message()
    // msg4.body = "Nice"
    // msg4.me = false
    // msg4.user = "Tony"

    // this.messages.push(msg1)
    // this.messages.push(msg2)
    // this.messages.push(msg3)
    // this.messages.push(msg4)
  }

}
