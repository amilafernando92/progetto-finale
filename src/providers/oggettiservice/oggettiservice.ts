import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oggetti } from '../../model/class';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { StorageserviceProvider } from '../../providers/storageservice/storageservice';

@Injectable()
export class OggettiserviceProvider {
  oggetto: Oggetti;
  vettore: Oggetti[] = [];
  date: string = new Date().toISOString();
  constructor(private storage: StorageserviceProvider) {
  }

  setVettore(vettore: Oggetti[]): void {
    this.vettore = vettore;
  }
  
  getOggetto (): Observable<Oggetti[]> {
    return of(this.vettore);
  }

  addItem (appobject): void {
    appobject.id = this.vettore.length+1;
    this.vettore.push(appobject);
    console.log(this.vettore);
    this.storage.setStorageItem (this.vettore);
  }

  setOggetto (appid, nome, descrizione, foto, disponibilita, personaprestato, giorno): void  {
    this.vettore.forEach((item, index) => {
      if (item.id === appid) {
        item.nome = nome;
        item.descrizione = descrizione;
        item.foto = foto;
        item.disponibilita = disponibilita;
        item.personaprestato = personaprestato;
        item.giorno = giorno;
      }
    });
    alert('Oggetto Modificato');
    this.storage.setStorageItem (this.vettore);
  }

  removeItem(appid): void {
    this.vettore.forEach((item, index) => {
      if (item.id === appid) this.vettore.splice(index, 1);
    });
    alert('Oggetto Eliminato');
    this.storage.setStorageItem (this.vettore);
  }
}
