import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import * as firebase from 'firebase/compat';
import { userInfo } from 'os';
import { AuthenticationService } from 'src/app/services/authentication-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  userEmail = null;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.userEmail = this.getUserEmail();
  }

  ngOnInit() {
  }

  getUserEmail() {
    return this.authenticationService.getUserEmail;
  }

  goLogin() {
    this.router.navigateByUrl('login');
  }

  goRegister() {
    this.router.navigateByUrl('register');
  }

  signOut() {
    this.authenticationService.signOut();
  }

}
