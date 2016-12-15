import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";

// global services
import { AuthService } from "./services/auth.service";
// TODO: consider to move ParseService to components which use it
import { ParseService } from './services/parse.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { ChatComponent } from './chat/chat.component';

import { routerConfig } from "./app.router";
import { RouterModule } from "@angular/router";

import { AuthGuard } from "./services/auth.guard";
import { UnauthGuard } from "./services/unauth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [AuthService,ParseService,UnauthGuard,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
