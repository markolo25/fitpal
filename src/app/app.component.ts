import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';



@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform) {
    var config = {
      apiKey: "AIzaSyDluiTczgN9WFnIxPsBQAVLShPXVPiy7J0",
      authDomain: "fitbit-go.firebaseapp.com",
      databaseURL: "https://fitbit-go.firebaseio.com",
      storageBucket: "fitbit-go.appspot.com",
      messagingSenderId: "1003528262869"
    };
    firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.rootPage = HomePage;
        }else{
          this.rootPage = LoginPage;
        }
      });





    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
