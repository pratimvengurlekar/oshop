import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  appUser:AppUser
  constructor(private afAuth:AuthService) { 

    afAuth.appUser$.subscribe(appUser=> this.appUser = appUser);
    
  }

  ngOnInit() {
  }
  Logout(){
    this.afAuth.Logout();
  }
}
