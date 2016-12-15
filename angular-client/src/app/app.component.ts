import { Component } from '@angular/core';
// import { ParseService } from './services/parse.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // subscription

  // constructor(private parseSvc: ParseService,private zone: NgZone) {
  // }

  // ngOnInit() {

  //   this.subscription = this.parseSvc.newsSubscription()
  //   this.subscription.on('update', (news) => {
  //     this.zone.run(()=> {
  //       this.title = news.get('message')
  //     })
  //   })

  //   this.subscription.on('create', (news) => {
  //     this.zone.run(()=> this.message = news.get('message'))
  //   })
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe()
  // }
}
