import { MovieComponent } from './movie/movie.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { RefreshComponent } from './refresh/refresh.component';

export const components: any[] = [
  MovieComponent,
  ReviewsComponent,
  NewMovieComponent,
  NewReviewComponent,
  RefreshComponent
];

export * from './movie/movie.component';
export * from './new-movie/new-movie.component';
export * from './new-review/new-review.component';
export * from './reviews/reviews.component';
export * from './refresh/refresh.component';
