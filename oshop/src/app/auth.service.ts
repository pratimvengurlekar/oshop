import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth }  from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { map, switchMap } from 'rxjs/operators';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
 
  constructor(
    private afAuth:AngularFireAuth,
    private route:ActivatedRoute,
    private userservice:UserService
    )
    {
      this.user$ = afAuth.authState;
    }

  Login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
     
  }
  Logout(){
    this.afAuth.auth.signOut();
  }
  get appUser$():Observable<AppUser>{

    return this.user$.pipe(
      switchMap((user:firebase.User)=>{
        if(user) return this.userservice.get(user.uid);

        return of(null);
      })
    );

  }
}
