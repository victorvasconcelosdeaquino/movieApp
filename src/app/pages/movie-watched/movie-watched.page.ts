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
    debugger
    this.results = this.dataService.getData();
  }

}
