import { Storage } from '@ionic/storage-angular';
import { Injectable, OnInit } from '@angular/core';

const STORAGE_KEY = 'list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) { 
    this.init();
  }

  init(){
    this.storage.create();
  }

  getData(){
   return this.storage.get(STORAGE_KEY) || [];
  }

  async addItem(item: any){
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.push(item);
    return this.storage.set(STORAGE_KEY, storedData);
  }

  async removeItem(index: any){
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.splice(index, 1);
    return this.storage.set(STORAGE_KEY, storedData);
  }
}
