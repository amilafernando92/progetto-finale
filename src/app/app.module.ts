import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// Pagine
import { HomePage } from '../pages/home/home';
import { OggettiPage } from '../pages/oggetti/oggetti';
import { AddoggettiPage } from '../pages/addoggetti/addoggetti';
import { DeleteoggettiPage } from '../pages/deleteoggetti/deleteoggetti';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OggettiPage,
    AddoggettiPage,
    DeleteoggettiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OggettiPage,
    AddoggettiPage,
    DeleteoggettiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage
  ]
})
export class AppModule {}
