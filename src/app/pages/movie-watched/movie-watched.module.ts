import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieWatchedPageRoutingModule } from './movie-watched-routing.module';

import { MovieWatchedPage } from './movie-watched.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieWatchedPageRoutingModule
  ],
  declarations: [MovieWatchedPage]
})
export class MovieWatchedPageModule {}
