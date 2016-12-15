import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  // canActivate returned type is boolean or Observable<boolean>
  canActivate(): boolean {
    if (this.auth.authenticated) {
      return true
    }
    this.router.navigate(['/login']);
    return false;
  }
}
