import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; // I added IonicPage and NavParams
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser'; // I added 
import {LoginPage} from '../login/login';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import {HomePage} from '../home/home'
import { InstructionPage } from '../instruction/instruction';
import { NFSPage } from './nfs';
import { GeminiPage } from './gemini';
import { IntfwPage } from './intfw';
import { ExtfwPage } from './extfw';
import { DefaultgwPage } from './defaultgw';
import { DMZPage } from './dmz';

//import {Storage} from '@ionic/storage'; // I added


@Component({
  selector: 'page-host',
  templateUrl: 'host.html'
})
export class HostPage {
  
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};


  constructor(public navCtrl: NavController,
    private theInAppBrowser: InAppBrowser,
    public navParams: NavParams) {
      
  }
   
  disp(arg)
  {
    if(arg=='Gemini')
    this.navCtrl.push(GeminiPage);
    else if(arg=='NFS')
    this.navCtrl.push(NFSPage);
    else if(arg=='IntFW')
    this.navCtrl.push(IntfwPage);
    else if(arg=='ExtFW')
    this.navCtrl.push(ExtfwPage);
    else if(arg=='DefaultGW')
    this.navCtrl.push(DefaultgwPage);
    else if(arg=='DMZ')
    this.navCtrl.push(DMZPage);
    
  }

  public openWithInAppBrowser(url : string){
    let target = "_self";
    this.theInAppBrowser.create(url,target,this.options);
    
}
public openWithCordovaBrowser(url : string){
  let target = "_self";
  this.theInAppBrowser.create(url,target,this.options);
}

openPage(page: string) {
  this.navCtrl.push(page);
}

}
