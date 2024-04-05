import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieWatchedPage } from './movie-watched.page';

const routes: Routes = [
  {
    path: '',
    component: MovieWatchedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieWatchedPageRoutingModule {}
