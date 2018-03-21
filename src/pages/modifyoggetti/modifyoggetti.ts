//altri
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Pagine
import { HomePage } from '../home/home';
//servizi / provider
import { OggettiserviceProvider } from '../../providers/oggettiservice/oggettiservice';

@IonicPage()
@Component({
  selector: 'page-modifyoggetti',
  templateUrl: 'modifyoggetti.html',
})
export class ModifyoggettiPage {

  app: any;
  homepage = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private serviziooggetti: OggettiserviceProvider) {
    this.app = this.navParams.get('prova');
  }

  ionViewDidLoad(): void {
  }

  modify (): void { //funzione che modifica l'oggetto richiamando funzione del servizio
    this.serviziooggetti.setOggetto (this.app.id, this.app.nome, this.app.descrizione, this.app.foto, this.app.disponibilita, this.app.personaprestato, this.app.giorno);
    this.navCtrl.setRoot(this.homepage);
  }

  nullo (): void {} //funzione da implementare per futuro
}
