//altri
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Camera } from '@ionic-native/camera';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private serviziooggetti: OggettiserviceProvider, private camera: Camera) {
    this.oggetto = new Oggetti ();
  }

  takePicture(){
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.oggetto.foto = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  submit (): void { //funzione che aggiunge un oggetto richiamando funzione del servizio
    this.serviziooggetti.addItem (this.oggetto);
    this.returnPage ();
  }
  
  returnPage () {
    this.navCtrl.setRoot(this.homepage);
  }

  nullo (): void {} //funzione da implementare per futuro
}
