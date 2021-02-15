import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListOfMovies } from '../shared/interfaces/listOfMovies.interface';
import { movieDetail } from '../shared/interfaces/movieDetail.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getListOfMovies(url: string) {
    return this.http.get<ListOfMovies>(url);
  }

  getMovieDetail(url: string) {
    return this.http.get<movieDetail>(url);
  }
}
