import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import {NgbdPaginationAdvancedModule} from './app/pagination-advanced.module';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  searchInfo: any = {};
  totalPages: number = 1;
  moviesList: any[] = [];
  query: string = '';
  page = 1;

  constructor(public api: ApiService) {}

  searchMovies(query: string) {
    if (query.length == 0) {
      this.api
        .getListOfMovies(
          'https://api.themoviedb.org/3/search/movie?api_key=27337898bc0c9b2c97bc056520acb400&language=en-US&page=1&include_adult=false&query=a'
        )
        .subscribe((data: any) => {
          this.searchInfo = data;
          this.totalPages = data.total_pages;
          console.log(this.searchInfo);
          this.moviesList = data.results;
          this.page = 1;
        });
    } else {
      this.api
        .getListOfMovies(
          'https://api.themoviedb.org/3/search/movie?api_key=27337898bc0c9b2c97bc056520acb400&language=en-US&page=1&include_adult=false&query=' +
            encodeURI(query)
        )
        .subscribe((data: any) => {
          this.searchInfo = data;
          this.totalPages = data.total_pages;
          console.log(this.searchInfo);
          this.moviesList = data.results;
          this.page = 1;
        });
    }
  }
  searchMoviesByPagination(paginationPage: number, query: string) {
    console.log('PAGINATION NUMBER', paginationPage);
    if (query.length == 0) {
      this.api
        .getListOfMovies(
          'https://api.themoviedb.org/3/search/movie?api_key=27337898bc0c9b2c97bc056520acb400&language=en-US&page=' +
            paginationPage +
            '&include_adult=false&query=a'
        )
        .subscribe((data: any) => {
          this.searchInfo = data;
          console.log(this.searchInfo);
          this.moviesList = data.results;
        });
    } else {
      this.api
        .getListOfMovies(
          'https://api.themoviedb.org/3/search/movie?api_key=27337898bc0c9b2c97bc056520acb400&language=en-US&page=' +
            paginationPage +
            '&include_adult=false&query=' +
            encodeURI(query)
        )
        .subscribe((data: any) => {
          this.searchInfo = data;
          console.log(this.searchInfo);
          this.moviesList = data.results;
        });
    }
  }
  consoleLog(item: any) {
    console.log('ITEM', item);
  }
  ngOnInit(): void {
    this.searchMovies(this.query);
  }
}
