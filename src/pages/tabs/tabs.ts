import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RecordPage } from '../record/record';
import { ConfigPage } from "../config/config";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RecordPage;
  tab3Root = ConfigPage;

  constructor() {

  }
}
