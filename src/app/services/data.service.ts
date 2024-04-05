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
    console.log('INIT');
    this.storage.create();
    console.log('DONE');
  }

  getData(key: string){
    console.log('GET DATA');
    debugger
    return this.storage.get(key) || [];
  }

  async addWatched(item: any, key: string){
    const storedData = await this.storage.get(key) || [];
    storedData.push(item, key);
    return this.storage.set(key, storedData);
  }

  async removeWatched(index: any, key: string){
    const storedData = await this.storage.get(key) || [];
    storedData.splice(index, 1);
    return this.storage.set(key, storedData);
  }

  async addList(item: any, key: string){
    const storedData = await this.storage.get(key) || [];
    storedData.push(item, key);
    return this.storage.set(key, storedData);
  }

  async removeList(index: any, key: string){
    const storedData = await this.storage.get(key) || [];
    storedData.splice(index, 1);
    return this.storage.set(key, storedData);
  }
}
