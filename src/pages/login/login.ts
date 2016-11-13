import * as firebase from 'firebase';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register'
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public emailField: any;
  public passwordField: any;

  constructor(public navCtrl: NavController, private ModalCtrl: ModalController) {





  }

  submitLogin() {
    firebase.auth().signInWithEmailAndPassword(this.emailField, this.passwordField).catch(error => {
      alert(error.message)
    });
  }
  submitRegister() {
    let registerModal = this.ModalCtrl.create(RegisterPage);
    registerModal.present();
  }
  /*
  submitLoginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch( (error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }
  */



  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

}
