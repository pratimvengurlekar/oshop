import { UserService } from './user.service';
import { AuthService } from './auth.service';

import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuardService implements CanActivate {

  constructor(private auth:AuthService,private userservice:UserService) { }

  canActivate():Observable<boolean>{

    return this.auth.appUser$
    .pipe(
      
      map((appUser) => appUser.isAdmin)
      );
  }

 
}