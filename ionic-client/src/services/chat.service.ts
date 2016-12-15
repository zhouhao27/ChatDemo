import { Injectable } from '@angular/core'
import { ParseService } from './parse.service'
import { Observable } from 'rxjs/Observable'
// import { Message } from '../models/message.module'
import { ChatMessage } from '../pages/chat/chat-message.model'

@Injectable()
export class ChatService {

  constructor(private parseSvc: ParseService) {
  }

  joinRoom(roomId:string): Observable<ChatMessage> {
    return new Observable(observer => {
      this.parseSvc.joinRoom(roomId).on('create',(data) => {
        let message = new ChatMessage()
        // TODO: it's not possible to get other user's info
        let user = data.get('user')
        let from = data.get('from')
        message.content = data.get('message')
        message.senderName = from != null ? from : 'Anonymous'
        let me = user != null ? (user.id === this.parseSvc.currentUser.id) : false
        message.position = me ? "right" : "left"
        // TODO: from user object later
        message.img = me ? "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" : "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
        // TODO: from created date
        message.time = "1s ago"
        // console.log(message)
        observer.next(message)
      })
    })
  }

  exitRoom(roomId:string) {
    this.parseSvc.exitRoom(roomId)
  }

  loadAll(roomId:string): Observable<ChatMessage[]> {
    return this.parseSvc.loadAllMessages(roomId)
  }

  sendMessage(roomId:string,message: string) : Observable<boolean> {
    return this.parseSvc.sendMessage(roomId,message)
  }
}
