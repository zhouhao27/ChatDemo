import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AuthService } from '../services/auth.service'
import { LoginPage } from '../pages/login/login'

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage;

  constructor(platform: Platform,private authSvc: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ngOnInit() {
    if (this.authSvc.authenticated) {
      this.rootPage = HomePage
    } else {
      this.rootPage = LoginPage
    }
  }
}
