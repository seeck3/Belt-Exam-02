import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../../models';

import { HttpService } from '../../services/http.service';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  star = [];
  avg = [];
  s: any;
  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.httpService.getMovies().subscribe(movies => {
      console.log('movies from observable', movies);
      this.movies = movies;
      for (let z of movies) {
        var temp = [];
        for (let x of z.reviews) {
          console.log("xxxxxxxxxxxxx", x.star);
          temp.push(x.star);
        }
        console.log(temp);
        this.avg.push(temp);
      }
      console.log(this.avg);
      for (let i = 0; i < this.avg.length; i++) {
        console.log(this.avg[i]);
        var k = 0
        for (let j = 0; j < this.avg[i].length; j++) {
          k = k + this.avg[i][j];
        }
        this.star.push(k);
      }
      console.log("sfadffasdfasdfsd", this.star);
      // for (let z of movies) {
      //   let temp = [];
      //   console.log("zzzzzzzzzzzzzz", z.stars);
      //   // this.star.push(z.stars);

      //   for (let x of z.stars) {
      //     var y = 0;
      //     console.log("xxxxxxxx", x);
      //     temp.push(x);
      //   }
      //   console.log("temptemptemptmeptemp", temp);
      //   var q = 0;
      //   for (let i = 0; i < temp.length; i++) {
      //       y = temp[i];
      //       console.log("yyyyyyyyyyyyyyyyy", y);
      //       q = q + y;
      //       console.log("qqqqqqqqqqqqqq",q);
      //     }
      //   this.avg.push(q);
      // }
      //   console.log('asdffasd', this.avg);

      // });
    });
    // onDelete(id: number) {
    //   console.log('Deleting movie');
    //   this.httpService.deleteMovie(id).subscribe(deletedMovie => {
    //     console.log('zzzzzzzzzzz', deletedMovie);
    //     this.movies = this.movies.filter(movie => movie._id !== deletedMovie._id);
    //     this.router.navigateByUrl('/');
    //   });
    // }
  }
}
