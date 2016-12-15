import { Injectable } from '@angular/core'
import { ParseService } from './parse.service'
import { Observable } from 'rxjs/Observable'
import { Room } from '../pages/home/room.model'

@Injectable()
export class RoomService {
  constructor(private parseSvc: ParseService) {}

  get allRooms() : Observable<Room[]> {
    return this.parseSvc.getAllRooms()
  }
}
