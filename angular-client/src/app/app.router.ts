import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component'
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from "./services/auth.guard";
import { UnauthGuard } from "./services/unauth.guard";

export const routerConfig: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
      },
      {
        path: 'chat',
        component: ChatComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
