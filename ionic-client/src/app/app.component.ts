import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AuthService } from '../services/auth.service'
import { NewsService } from '../services/news.service'

import { LoginPage } from '../pages/login/login'

@Component({
  templateUrl: 'app.html',
  providers: [NewsService]
})
export class MyApp implements OnInit, OnDestroy {
  rootPage;

  constructor(platform: Platform,
    private alertCtrl: AlertController,
    private zone: NgZone,
    private authSvc: AuthService,
    private newsSvc: NewsService) {

    // if (!platform.is('core')) {
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
        Splashscreen.hide();
      });
    // } else {
    //   Splashscreen.hide();
    // }
  }

  ngOnInit() {
    if (this.authSvc.authenticated) {
      this.rootPage = HomePage
    } else {
      this.rootPage = LoginPage
    }

    // monitor broadcasting
    // subscribe to broadcasting news
    this.newsSvc.startBroadcast()
      .subscribe( message => {
        this.zone.run(() => {
          this.showAlert(message)
        })
      })
  }

  ngOnDestroy() {
    this.newsSvc.stopBroadcast()
  }

  showAlert(message:string) {
    let alert = this.alertCtrl.create({
      title: 'Broadcasting!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
