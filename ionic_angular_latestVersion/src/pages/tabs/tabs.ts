import { Component } from '@angular/core';

import { HostPage } from '../host/host';
import { InstructionPage } from '../instruction/instruction';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 
  tab2Root = HostPage;
  tab3Root = InstructionPage;
  


  constructor(public navCtrl: NavController) {

  }
  logout()
  {
    this.navCtrl.push(LoginPage);
  }

}