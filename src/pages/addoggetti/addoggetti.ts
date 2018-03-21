import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NativeStorage } from "@ionic-native/native-storage";
import { Oggetti } from '../../model/class';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { StorageserviceProvider } from '../../providers/storageservice/storageservice';
import { OggettiserviceProvider } from '../../providers/oggettiservice/oggettiservice';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: "page-addoggetti",
  templateUrl: "addoggetti.html"
})
export class AddoggettiPage {
  oggetto: Oggetti;
  homepage = HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private nativeStorage: NativeStorage, private storage: StorageserviceProvider, private serviziooggetti: OggettiserviceProvider) {
    this.oggetto = new Oggetti ();
  }

  ionViewDidLoad(): void {
  }

  submit (): void {
    this.serviziooggetti.addItem (this.oggetto);
  }

  nullo (): void {}
}
