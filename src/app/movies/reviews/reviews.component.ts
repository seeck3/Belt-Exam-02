import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { ArrayPipe } from '../../array.pipe';
import { Movie } from '../../models';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input()
  movie: any;
  movies: Movie[] = [];
  review: any;
  selectedMovie;
  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('movie_id')),
        switchMap(movieId => this.httpService.getMovie(movieId))
      )
      .subscribe(movie => {
        // console.log(movie.reviews.name);
        this.movie = movie;
        console.log('movie = ', this.movie);
      });
    // this.httpService.getReview(this.review).subscribe(review => {
    //   this.review = review;
    //   console.log('review = ', review);
    // });
  }
  onDelete(id: number) {
    console.log('Deleting movie');
    this.httpService.deleteMovie(this.movie._id).subscribe(deletedMovie => {
      console.log('zzzzzzzzzzz', deletedMovie);
      this.movies = this.movies.filter(movie => movie._id !== deletedMovie._id);
      this.router.navigateByUrl('/');
    });
  }

  onReviewDelete(id: number, review_id) {
    console.log('Deleting review', id, review_id);
    this.httpService.deleteReview(id, review_id).subscribe(deletedReview => {
      console.log('afsdfasdfasdfads', deletedReview);
      this.movies = this.movies.filter(reviews => review_id !== deletedReview);
    });
    // this.router.navigate(['movies', id, 'refresh']);
  }

  }

