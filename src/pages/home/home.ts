import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Oggetti } from '../../model/class';
import { NativeStorage } from '@ionic-native/native-storage';
// Pagine
import { AddoggettiPage } from '../addoggetti/addoggetti';
import { ModifyoggettiPage } from '../modifyoggetti/modifyoggetti';
import { DeleteoggettiPage } from '../deleteoggetti/deleteoggetti';
import { StorageserviceProvider } from '../../providers/storageservice/storageservice';
import { OggettiserviceProvider } from '../../providers/oggettiservice/oggettiservice';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  vettore: Oggetti[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage, private storage: StorageserviceProvider, private serviziooggetti: OggettiserviceProvider) {
  }

  ionViewDidLoad(): void {
    this.storage.getStorageItem ().then(
      data => { (data) ? this.vettore = data : this.vettore = [] 
          this.serviziooggetti.setVettore(this.vettore);
      },
      error => console.error(error)
    );
  }

  changepage (app, type): void {
    switch (type) {
      case 1 :
        this.navCtrl.push (AddoggettiPage);
      break;
      case 2 :
        this.navCtrl.push (ModifyoggettiPage, { prova: app });
      break;
      case 3 :
        this.navCtrl.push (DeleteoggettiPage, { prova: app });
      break;
    }
  }
}
