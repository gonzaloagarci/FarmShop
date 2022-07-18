import { Component, OnInit } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithRedirect
} from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: Auth) { 
  }

  login(){
    signInWithRedirect( this.auth, new GoogleAuthProvider());
  }
}
