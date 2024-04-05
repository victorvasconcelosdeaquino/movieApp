import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-watched',
  templateUrl: './movie-watched.page.html',
  styleUrls: ['./movie-watched.page.scss'],
})
export class MovieWatchedPage implements OnInit {

  results: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.init();
  }  

  init(){    
    this.results = this.dataService.getData('watched');
  }

  async removeWatched(item: any, type: string){
    this.dataService.removeWatched(item, type);
    this.init();
  }

}
