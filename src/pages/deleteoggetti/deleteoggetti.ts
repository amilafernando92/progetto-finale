import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
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

  elimina (): void {
    this.serviziooggetti.removeItem(this.app.id);
  }

}
