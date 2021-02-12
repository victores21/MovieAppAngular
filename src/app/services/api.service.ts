import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api_url: string = 'https://jsonplaceholder.typicode.com/todos/';
  constructor(private http: HttpClient) {}

  getListOfMovies(url: string) {
    return this.http.get(url);
  }
}
