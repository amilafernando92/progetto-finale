import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Oggetti } from '../../model/class';
import { NativeStorage } from '@ionic-native/native-storage';
// Pagine
import { OggettiPage } from '../oggetti/oggetti';
import { AddoggettiPage } from '../addoggetti/addoggetti';
import { DeleteoggettiPage } from '../deleteoggetti/deleteoggetti';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  vettore = [];
  oggetto1: Oggetti = new Oggetti;
  // oggetto2: Oggetti = new Oggetti;
  // oggetto3: Oggetti = new Oggetti;
  // oggetto4: Oggetti = new Oggetti;
  oggettipage = OggettiPage;
  addoggettipage = AddoggettiPage;
  deleteoggettipage = DeleteoggettiPage;
  // modifyoggettipage = ModifyoggettiPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage) {
    this.nativeStorage.getItem("vettore").then(
      data => { (data) ? this.vettore = data : this.vettore = [] },
      error => console.error(error)
    );
    this.oggetto1.nome = 'Penna';
    this.oggetto1.descrizione = 'penna di colore nero';
    this.oggetto1.prestato = 'Marco';
    this.oggetto1.giorno = '19-03-2018';
    this.vettore.push (this.oggetto1);
    // this.oggetto2.nome = 'Matita';
    // this.oggetto2.descrizione = 'Matita tipo 2H';
    // this.oggetto2.prestato = 'Giorgia';
    // this.oggetto2.giorno = '20-02-2018';
    // this.vettore.push (this.oggetto2);
    // this.oggetto3.nome = 'Pennarello';
    // this.oggetto3.descrizione = 'Pennarello colore rosso';
    // this.oggetto3.prestato = 'Mattia';
    // this.oggetto3.giorno = '20-01-2018';
    // this.vettore.push (this.oggetto3);
    // this.oggetto4.nome = 'Gomma';
    // this.oggetto4.descrizione = 'Gomma bi colore';
    // this.oggetto4.prestato = 'Elisa';
    // this.oggetto4.giorno = '12-03-2018';
    // this.vettore.push (this.oggetto4);

    // this.nativeStorage.setItem('vettore', this.vettore).then(
    //   () => console.log('Stored item!'),
    //   error => console.error('Error storing item', error)
    // );
  }

  ionViewDidLoad() {
    // this.nativeStorage.getItem ('vettore').then(
    //   data => this.vettore = data,
    //   error => console.error(error)
    //   ,
    // );
  }

}
