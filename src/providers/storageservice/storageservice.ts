//altri
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//storage
import { NativeStorage } from "@ionic-native/native-storage";
//classe / model
import { Oggetti } from '../../model/class';

@Injectable()
export class StorageserviceProvider {

  constructor(public http: HttpClient, private nativeStorage: NativeStorage) {
  }

  getStorageItem (): Promise<Oggetti[]> { //funzione che prende dati dal storage
    return this.nativeStorage.getItem("vettore");
  }

  setStorageItem (vettore): void { //funzione che carica dati al storage
    this.nativeStorage.setItem("vettore", vettore);
  }
}
