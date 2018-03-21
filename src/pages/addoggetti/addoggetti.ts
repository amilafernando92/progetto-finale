//altri
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
//classe / model
import { Oggetti } from '../../model/class';
//servizi / provider
import { OggettiserviceProvider } from '../../providers/oggettiservice/oggettiservice';
// Pagine
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: "page-addoggetti",
  templateUrl: "addoggetti.html"
})
export class AddoggettiPage {

  oggetto: Oggetti;
  homepage = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private serviziooggetti: OggettiserviceProvider) {
    this.oggetto = new Oggetti ();
  }

  ionViewDidLoad(): void {
  }

  submit (): void { //funzione che aggiunge un oggetto richiamando funzione del servizio
    this.serviziooggetti.addItem (this.oggetto);
  }

  nullo (): void {} //funzione da implementare per futuro
}
