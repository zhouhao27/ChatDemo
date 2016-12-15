import { Injectable } from '@angular/core'
import { ParseService } from './parse.service'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthService {

  constructor(private auth$: ParseService) {}

  login(email:string, password:string) {
    return this.auth$.login(email,password)
  }

  logout() {
    return this.auth$.logout()
  }

  signup(email:string, password:string) {
    return this.auth$.register(email,password)
  }

  get authenticated(): boolean {
    return this.auth$.currentUser !== null;
  }

  // get currentUser(): User {
  //   let user = new User()
  //   // TODO: wrap it
  //   user.id = this.auth$.currentUser.id
  //   user.name = this.auth$.currentUser.get("username")
  //   user.email = this.auth$.currentUser.get("email")
  //   // console.log(user)
  //   return user
  // }
}
