//altri
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Pagine
import { HomePage } from '../home/home';
//servizi / provider
import { OggettiserviceProvider } from '../../providers/oggettiservice/oggettiservice';

@IonicPage()
@Component({
  selector: 'page-deleteoggetti',
  templateUrl: 'deleteoggetti.html',
})
export class DeleteoggettiPage {

  homepage = HomePage;
  app: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private serviziooggetti: OggettiserviceProvider) {
    this.app = this.navParams.get('prova');
  }

  ionViewDidLoad(): void {
  }

  elimina (): void {  //funzione che elimina oggetto richiamando la funzione del servizio
    this.serviziooggetti.removeItem(this.app.id);
    this.navCtrl.setRoot(this.homepage);
  }

}
