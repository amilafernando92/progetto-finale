//altri
import { Injectable } from '@angular/core';
//oservabili
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
//classe / model
import { Oggetti } from '../../model/class';
//servizi / provider
import { StorageserviceProvider } from '../../providers/storageservice/storageservice';

@Injectable()
export class OggettiserviceProvider {

  vettore: Oggetti[] = [];

  constructor(private storage: StorageserviceProvider) {
  }

  setVettore(vettore: Oggetti[]): void {  //funzione che setta il vettore <arriva dal home.ts>
    this.vettore = vettore;
  }
  
  getOggetto (): Observable<Oggetti[]> {  //funzione che prende vettore
    return of(this.vettore);
  }

  addItem (appobject): void { //aggiunge un oggetto al vettore e poi caricato nello storage <viene dal addoggetti.ts>
    appobject.id = this.vettore.length+1;
    this.vettore.push(appobject);
    console.log(this.vettore);
    this.storage.setStorageItem (this.vettore);
  }

  setOggetto (appid, nome, descrizione, foto, disponibilita, personaprestato, giorno): void  {  //modifica del oggetto e caricato nel storage <viene dal modifyoggetti.ts>
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

  removeItem(appid): void { //cancella un oggetto dal vettore e caricata nel storage <viene dal deleteoggetti.ts>
    this.vettore.forEach((item, index) => {
      if (item.id === appid) this.vettore.splice(index, 1);
    });
    alert('Oggetto Eliminato');
    this.storage.setStorageItem (this.vettore);
  }
}
