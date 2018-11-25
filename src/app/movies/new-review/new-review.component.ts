import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';


import { Movie } from '../../models';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  registerForm: FormGroup;
  @Input()
  movie: Movie;

  movies: Movie[] = [];
  errors: string[] = [];

  @Output()
  createMovie = new EventEmitter<Movie>();
  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  //   this.registerForm = this.formBuilder.group({
  //     name: ['', [Validators.required, Validators.minLength(3)]],
  //     star: ['', Validators.required],
  //     review: ['', [Validators.required, Validators.minLength(3)]],
  // });
    this.route.paramMap
      .pipe(
        map(params => params.get('movie_id')),
        switchMap(movieId => this.httpService.getMovie(movieId))
      )
      .subscribe(movie => (this.movie = movie));
  }


  onSubmit(movie_id, form) {
    this.httpService.addReview(movie_id, form.value).subscribe(() => {
      this.createMovie.emit(form.value);
      this.movie = new Movie();
      form.reset();
      this.router.navigateByUrl('/');
    },
      error => {
        console.log(error);
        this.errors.push(error);
      });
  }


}

