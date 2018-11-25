import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Movie, Review } from '../../models';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  movie = new Movie();
  review = new Review();
  errors: string[] = [];

  @Output()
  createMovie = new EventEmitter<Movie>();
  createReview = new EventEmitter<Review>();
  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', form.value);

    // this.books.push(form.value);
    this.httpService.createMovie(form.value).subscribe(
      () => {
        this.createMovie.emit(form.value);
        this.createReview.emit(form.value);
        this.movie = new Movie();
        this.review = new Review();
        form.reset();
        this.router.navigateByUrl('/');
      },
      error => {
        console.log(error);
        this.errors.push(error);
      }
    );
  }
}
