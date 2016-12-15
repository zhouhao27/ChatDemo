import { Injectable } from '@angular/core'
import { ParseService } from './parse.service'
import { Observable } from 'rxjs/Observable'
import { Message } from '../chat/message.module'

@Injectable()
export class ChatService {
  private subscription

  constructor(private parseSvc: ParseService) {
    this.subscription = this.parseSvc.newsSubscription()
  }

  startUpdate(): Observable<string> {
    return new Observable(observer => {
      this.subscription.on('create', (news) => {
        let message = new Message()
        // TODO: it's not possible to get other user's info
        let user = news.get('user')
        let from = news.get('from')
        message.body = news.get('message')
        message.user = from != null ? from : 'Anonymous'
        message.me = user != null ? (user.id === this.parseSvc.currentUser.id) : false
        // console.log(message)
        observer.next(message)
      })
      // TODO: other events
      // this.subscription.on('update', (news) => {
      //   this.zone.run(()=> {
      //     this.title = news.get('message')
      //   })
      // })
    })
  }

  stopUpdate() {
    this.subscription.unsubscribe()
  }

  sendMessage(message: string) : Observable<boolean> {
    return this.parseSvc.sendMessage(message)
  }
}
