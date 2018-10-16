import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HostPage } from '../pages/host/host';
import { NFSPage } from '../pages/host/nfs';
import { IntfwPage } from '../pages/host/intfw';
import { ExtfwPage } from '../pages/host/extfw';
import { GeminiPage } from '../pages/host/gemini';
import { DefaultgwPage } from '../pages/host/defaultgw';

import { InstructionPage } from '../pages/instruction/instruction';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from  '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DMZPage } from '../pages/host/dmz';

@NgModule({
  declarations: [
    MyApp,
    HostPage,
    InstructionPage,
    HomePage,
    TabsPage,
    LoginPage,
    NFSPage,
    IntfwPage,
    ExtfwPage,
    GeminiPage,
    DefaultgwPage,
    DMZPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HostPage,
    InstructionPage,
    HomePage,
    TabsPage,
    LoginPage,
    NFSPage,
    IntfwPage,
    ExtfwPage,
    GeminiPage,
    DefaultgwPage,
    DMZPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
