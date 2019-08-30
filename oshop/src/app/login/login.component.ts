import { Component, OnInit } from '@angular/core';
import { AngularFireAuth }  from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth:AuthService) {
    
   }

  ngOnInit() {
  }
  
  
  Login(){
    this.afAuth.Login();
     
  }

}
