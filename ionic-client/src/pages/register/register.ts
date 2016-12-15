import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service'
import { HomePage } from '../home/home'

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  password:string = ''
  username:string = ''

  constructor(public navCtrl: NavController,
    private authSvc: AuthService,
    private loadCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }

  // TODO: form validating
  doRegister() {
    let loader = this.loadCtrl.create({
      content: "Signing up..."
    });
    loader.present();

    this.authSvc.signup(this.username, this.password)
      .subscribe( success => {
          alert('User created successfully !');
          this.navCtrl.setRoot(HomePage)
      },error => {
        alert(error.message)
      },() => {
        loader.dismiss()
      })
  }
}
