import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';
import { RegisterPage } from '../pages/register/register';
import { AuthService } from "../services/auth.service";
import { ParseService } from "../services/parse.service";
import { ChatBubble } from '../components/chat/chat-bubble.component'
import { ElasticTextarea } from '../components/chat/elastic-textarea.component'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ChatPage,
    RegisterPage,
    ChatBubble,
    ElasticTextarea
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ChatPage,
    RegisterPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ParseService
  ]
})
export class AppModule {}
