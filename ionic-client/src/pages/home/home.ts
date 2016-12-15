import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service'
import { LoginPage } from '../login/login'
import { ChatPage } from '../chat/chat'
import { Room } from './room.model'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chatRooms :Room[] = []

  constructor(public navCtrl: NavController,private authSvc: AuthService) {
  }

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
    let r1 = new Room()
    r1.id = "1"
    r1.name = "Room 1"

    let r2 = new Room()
    r2.id = "2"
    r2.name = "Room 2"

    let r3 = new Room()
    r3.id = "3"
    r3.name = "Room 3"

    this.chatRooms.push(r1)
    this.chatRooms.push(r2)
    this.chatRooms.push(r3)
  }

  logout() {
    this.authSvc.logout()
      .subscribe( success => {
      })
    this.navCtrl.setRoot(LoginPage)
  }

  roomSelected(room: Room) {
    console.log(room)
    this.navCtrl.push(ChatPage,{room: room})
  }
}
