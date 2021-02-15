import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListOfMoviesQuery } from '../shared/interfaces/listOfMovies.interface';
import { MovieDetail } from '../shared/interfaces/movieDetail.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getListOfMovies(url: string) {
    return this.http.get<ListOfMoviesQuery>(url);
  }

  getMovieDetail(url: string) {
    return this.http.get<MovieDetail>(url);
  }
}
