import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

const Parse = require('parse');

@Injectable()
export class ParseService {
  newsQuery // TODO: type

  constructor() {
    console.log('Parse initialized!')
    Parse.initialize("parse-server-example-es6-2016");
    Parse.serverURL = 'http://localhost:8080/parse'
  }

  public newsSubscription() {
    if (!this.newsQuery) {
      this.newsQuery = new Parse.Query('News');
    }
    // this.newsQuery.equalTo('title', 'broadcast');
    return this.newsQuery.subscribe();
  }

  public login(email:string,password:string): Observable<boolean> {
    return new Observable(observer => {
      Parse.User.logIn(email, password, {
        success: function(user) {
          observer.next(true)
        },
        error: function(user, error) {
          observer.error(error)
        }
      });
    })
  }

  public register(username:string,password:string): Observable<boolean> {
    return new Observable(observer => {
      var user = new Parse.User()
      user.set("username", username)
      user.set("password", password)
      // user.set("email", "email@example.com");

      user.signUp(null, {
        success: (user) => {
          observer.next(true)
          observer.complete()
        },
        error: (user, error) => {
          observer.error(error)
        }
      })
    })
  }

  public logout(): Observable<boolean> {
    return new Observable(observer => {
      // Parse.User.logOut().then(()=> observer.onNext(true))
      Parse.User.logOut().then(()=> observer.next(true))
    })
  }

  public get currentUser() {
    return Parse.User.current()
  }

  // TODO: consider to return User
  public sendMessage(message:string): Observable<boolean> {
    // TODO: change the object to message or something else later
    var News = Parse.Object.extend("News");
    var news = new News();

    news.set("message", message);
    news.set("user", Parse.User.current());
    news.set("from", Parse.User.current().get('username'))

    return new Observable(observer => {
      news.save(null, {
        success: (result) => {
          observer.next(true)
          observer.complete()
        },
        error: (error) => {
          observer.error(error)
        }
      })
    })
  }
}


