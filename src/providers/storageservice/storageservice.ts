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

  getStorageItem (): Promise<Oggetti[]> {
    return this.nativeStorage.getItem("vettore");
  }

  setStorageItem (vettore): void {
    this.nativeStorage.setItem("vettore", vettore);
  }
}
