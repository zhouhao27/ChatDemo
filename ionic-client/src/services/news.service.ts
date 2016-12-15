/**
 * Broadcast news service
 */
import { Injectable } from '@angular/core'
import { ParseService } from './parse.service'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class NewsService {
  private broadcast

  constructor(private parseSvc: ParseService) {
    this.broadcast = this.parseSvc.newsSubscription()
  }

  startBroadcast() : Observable<string> {
    return new Observable(observer => {
      this.broadcast.on('create', (news) => {
        let message = news.get('message')
        observer.next(message)
      })
    })
  }

  stopBroadcast() {
    this.broadcast.unsubscribe()
  }
}
