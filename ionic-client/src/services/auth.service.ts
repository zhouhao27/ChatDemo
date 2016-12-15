import { Injectable } from '@angular/core'
import { ParseService } from './parse.service'
import { Observable } from 'rxjs/Observable'
import { User } from '../models/user.model'

@Injectable()
export class AuthService {

  constructor(private auth$: ParseService) {}

  login(email:string, password:string) : Observable<boolean> {
    return this.auth$.login(email,password)
  }

  logout(): Observable<boolean> {
    return this.auth$.logout()
  }

  signup(email:string, password:string) : Observable<boolean> {
    return this.auth$.register(email,password)
  }

  get authenticated(): boolean {
    return this.auth$.currentUser !== null;
  }

  get currentUser() : User {
    return this.auth$.currentUser
  }
}
