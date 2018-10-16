
import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-intfw',
  templateUrl: 'intfw.html'
})
export class IntfwPage {
  url: string;  
  
  constructor(private inAppBrowser: InAppBrowser) { }

  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_self', options);

   // Inject scripts, css and more with browser.X
  }
}