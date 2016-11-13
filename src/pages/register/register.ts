import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  public emailField: any;
  public passwordField: any;

  constructor(public navCtrl: NavController, private viewCtrl: ViewController) {}

  closeRegisterPage(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }

}
