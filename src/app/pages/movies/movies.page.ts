import { DataService } from './../../services/data.service';
import { MovieService, SearchType } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
 
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 
  constructor(private movieService: MovieService, private dataService: DataService) { }
 
  ngOnInit() { }
 
  searchChanged() {
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }

  async addWatched(item: any){
    debugger;
    await this.dataService.addItem(item.imdbID);
    this.searchChanged();
  }

  async removeWatched(item: any){
    this.dataService.removeItem(item.imdbID);
  }
}