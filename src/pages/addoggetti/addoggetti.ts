import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NativeStorage } from "@ionic-native/native-storage";
import { Oggetti } from "../../model/class";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

/**
 * Generated class for the AddoggettiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-addoggetti",
  templateUrl: "addoggetti.html"
})
export class AddoggettiPage {
  private todo: FormGroup;
  vettore = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private nativeStorage: NativeStorage
  ) {
    this.todo = this.formBuilder.group({
      nome: ["", Validators.required],
      descrizione: [""],
      foto: [""],
      prestato: [""],
      giorno: [""]
    });
  }

  ionViewDidLoad() {
    this.nativeStorage.getItem("vettore").then(
      data => { (data) ? this.vettore = data : this.vettore = [] },
      error => console.error(error)
    );

  }

  logForm() {
    this.vettore.push(this.todo.value);
    this.nativeStorage.setItem("vettore", this.vettore).then(() =>
      //console.log('Caricato del Storage'),
      error => console.error("Error storing item", error)
    );

  }
}
