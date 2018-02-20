import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListFilmesPage } from '../pages/list-filmes/list-filmes';
import { AddFilmesPage } from '../pages/add-filmes/add-filmes';
import { InfoFilmesPage } from '../pages/info-filmes/info-filmes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginServiceProvider } from '../providers/login-service/login-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListFilmesPage,
    AddFilmesPage,
    InfoFilmesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListFilmesPage,
    AddFilmesPage,
    InfoFilmesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    LoginServiceProvider
  ]
})
export class AppModule {}