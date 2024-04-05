import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {
  
  results: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.init();
  }  

  init(){    
    this.results = this.dataService.getData('list');
  }

  async removeList(item: any, type: string){
    this.dataService.removeList(item, type);
    this.init();
  }

}
