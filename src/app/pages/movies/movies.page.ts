import { DataService } from './../../services/data.service';
import { MovieService, SearchType } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  watched: any;

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 
  constructor(private movieService: MovieService, private dataService: DataService, private alertController: AlertController) { }
 
  ngOnInit() { }
 
  searchChanged() {
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }

  async presentAlert(type: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Information',
      message: `Movie added to ${type}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async addWatched(item: any, type: string){
    await this.dataService.addWatched(item, type);
    this.presentAlert('Wached');
    this.searchChanged();
  }

  async addList(item: any, type: string){
    await this.dataService.addList(item, type);
    this.presentAlert('MyList');
    this.searchChanged();
  }

}