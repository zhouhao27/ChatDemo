import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service'
import { LoginPage } from '../login/login'
import { User } from '../../models/user.model'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: User

  constructor(public navCtrl: NavController,private authSvc: AuthService) {
    this.user = this.authSvc.currentUser
  }

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }

  uploadImage() {
    alert('upload')
  }

  logout() {
    this.authSvc.logout()
      .subscribe( success => {
      })
    this.navCtrl.setRoot(LoginPage)
  }
}
