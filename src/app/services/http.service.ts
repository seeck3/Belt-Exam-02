import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



import { Movie } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private readonly base = 'https://lit-temple-82702.herokuapp.com/api/movies';
  constructor(
    private readonly http: HttpClient,

  ) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.base);
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.base}/${id}`);
  }

  getReview(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.base}/${id}/review`);
  }

  editMovie(id: number, callback): Observable<Movie> {
    return this.http.put<Movie>(`${this.base}/${id}`, callback);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.base, movie);
  }

  addReview(id: number, callback): Observable<Movie> {
    return this.http.put<Movie>(`${this.base}/${id}/review`, callback);
  }

  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.base}/${id}`);
  }

  deleteReview(id: number, review_id): Observable<Movie> {
    return this.http.delete<Movie>(`${this.base}/${id}/${review_id}`);
  }

  // likePet(id: number, callback): Observable<Movie> {
  //   return this.http.put<Movie>(`${this.base}/${id}/like`, callback);
  // }
}
