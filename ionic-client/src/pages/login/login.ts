import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register'
import { HomePage } from '../home/home'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  registerPage = RegisterPage
  password:string = ''
  username:string = ''

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private authSvc: AuthService) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  doLogin() {
    let loader = this.loadCtrl.create({
      content: "Logging in..."
    });
    loader.present();

    this.authSvc.login(this.username, this.password)
      .subscribe(success => {
        if (success) {
          this.navCtrl.setRoot(HomePage)
        } else {
          // TODO: error
        }
      }, error => {
        // TODO: AlertController
        alert(error);
      }, () => {
        loader.dismissAll();
      })
  }
}
