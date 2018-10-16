import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  user_credential={uname:'',password:''};

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
login(user_credential)
{
if(!(user_credential.uname=='cset' && user_credential.password=='cset')){
alert("Wrong Password");
}
else{
  this.navCtrl.push(TabsPage);
}
}
}
