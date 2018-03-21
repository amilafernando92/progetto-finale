import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from "@ionic-native/native-storage";
import { Oggetti } from "../../model/class";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

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
