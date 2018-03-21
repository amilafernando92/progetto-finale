import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// Pagine
import { HomePage } from '../pages/home/home';
import { AddoggettiPage } from '../pages/addoggetti/addoggetti';
import { ModifyoggettiPage } from '../pages/modifyoggetti/modifyoggetti';
import { DeleteoggettiPage } from '../pages/deleteoggetti/deleteoggetti';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { StorageserviceProvider } from '../providers/storageservice/storageservice';
import { HttpClientModule } from '@angular/common/http';
import { OggettiserviceProvider } from '../providers/oggettiservice/oggettiservice';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddoggettiPage,
    ModifyoggettiPage,
    DeleteoggettiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddoggettiPage,
    ModifyoggettiPage,
    DeleteoggettiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage,
    StorageserviceProvider,
    OggettiserviceProvider,
    Camera
  ]
})
export class AppModule {}
