//altri
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private serviziooggetti: OggettiserviceProvider, private camera: Camera) {
    this.app = this.navParams.get('prova');
  }

  ionViewDidLoad(): void {
  }

  modify (): void { //funzione che modifica l'oggetto richiamando funzione del servizio
    this.serviziooggetti.setOggetto (this.app.id, this.app.nome, this.app.descrizione, this.app.foto, this.app.disponibilita, this.app.personaprestato, this.app.giorno);
    this.returnPage ();
  }
  
  returnPage () {
    this.navCtrl.setRoot(this.homepage);
  }

  takePicture(){
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.app.foto = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  nullo (): void {} //funzione da implementare per futuro
}
