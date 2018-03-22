//altri
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//storage
import { NativeStorage } from '@ionic-native/native-storage';
//classe / model
import { Oggetti } from '../../model/class';
// Pagine
import { AddoggettiPage } from '../addoggetti/addoggetti';
import { ModifyoggettiPage } from '../modifyoggetti/modifyoggetti';
import { DeleteoggettiPage } from '../deleteoggetti/deleteoggetti';
//servizi / provider
import { StorageserviceProvider } from '../../providers/storageservice/storageservice';
import { OggettiserviceProvider } from '../../providers/oggettiservice/oggettiservice';
import { Platform } from 'ionic-angular/platform/platform';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  vettore: Oggetti[] = [];  //vettore di oggetti che contiene gli oggetti presi dal storage
  myColor = this.funzioneProva ();

  constructor(private platform: Platform, public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage, private storage: StorageserviceProvider, private serviziooggetti: OggettiserviceProvider) {
  }

  ionViewDidLoad(): void {  //solo qui viene richiamato getstorage
    this.platform.ready().then(() => {
      this.storage.getStorageItem ().then(
        data => { (data) ? this.vettore = data : this.vettore = [] 
            this.serviziooggetti.setVettore(this.vettore);
        },
        error => console.error(error)
      );
    });
  }

  changepage (app, type): void {  //funzione in base al click cambia pagina
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

  funzioneProva () {
    for (let cont=0; cont<this.vettore.length;cont++) {
      this.vettore[cont].id
    }
  }
}
