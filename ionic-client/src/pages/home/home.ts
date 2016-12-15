import { Component, NgZone } from '@angular/core';

import { NavController,AlertController } from 'ionic-angular';
import { RoomService } from '../../services/room.service'

import { ProfilePage } from '../profile/profile'
import { ChatPage } from '../chat/chat'
import { Room } from './room.model'

// TODO: refresh function
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RoomService]
})
export class HomePage {

  chatRooms :Room[] = []

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private roomSvc: RoomService,
    private zone: NgZone) {
  }

  ionViewDidLoad() {
    this.roomSvc.allRooms
      .subscribe( all => {
        this.chatRooms = all
      })
  }

  profile() {
    this.navCtrl.push(ProfilePage)
  }

  roomSelected(room: Room) {
    this.navCtrl.push(ChatPage,{room: room})
  }
}
