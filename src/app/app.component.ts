import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RequestOptions } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { ListFilmesPage } from '../pages/list-filmes/list-filmes';
import { AddFilmesPage } from '../pages/add-filmes/add-filmes';

import { CookieService } from 'angular2-cookie/core';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public requestOptions: RequestOptions,
    public cookieService: CookieService
  ) {

    if (this.cookieService.getObject("usuarioAtual")) {
      this.requestOptions.headers.set('Authorization', "Bearer " + this.cookieService.get("accessToken"));
      this.rootPage = ListFilmesPage;
    } else {
      this.rootPage = HomePage;
    }

    this.initializeApp();
 
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Lista Filmes', component: ListFilmesPage },
      { title: 'Adicionar Filmes', component: AddFilmesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}