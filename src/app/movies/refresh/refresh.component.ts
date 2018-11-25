import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { ArrayPipe } from '../../array.pipe';
import { Movie } from '../../models';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit {
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
        console.log("ididididididididi", this.movie._id);

        this.router.navigate(['movies', this.movie._id]);
      });
  }

}
