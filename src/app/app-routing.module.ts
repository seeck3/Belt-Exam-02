import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromMovies from './movies';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies/:movie_id/refresh',
    component: fromMovies.RefreshComponent,
    // redirectTo: 'movies/:movie_id',
    // pathMatch: 'full'
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        component: fromMovies.MovieComponent,
      },
      {
        path: 'new',
        component: fromMovies.NewMovieComponent,
      },
      {
        path: ':movie_id',
        component: fromMovies.ReviewsComponent,
      },
      {
        path: ':movie_id/review',
        component: fromMovies.NewReviewComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
