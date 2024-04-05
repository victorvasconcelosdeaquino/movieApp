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
    this.results = this.dataService.getData('list');
  }

}
