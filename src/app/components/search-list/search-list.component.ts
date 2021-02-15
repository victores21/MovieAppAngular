import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';

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
  searchValue: any = '';
  loading: boolean = true;

  constructor(public api: ApiService, private activatedRoute: ActivatedRoute) {}

  checkIfMoviesToShow(moviesList: any[]) {
    if (moviesList.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  searchMovies(query: string) {
    if (query.length == 0) {
      this.api
        .getListOfMovies(
          environment.API_URL +
            'search/movie?api_key=' +
            environment.API_KEY +
            '&language=en-US&page=1&include_adult=false&query=a'
        )
        .subscribe((data: any) => {
          this.searchInfo = data;
          this.totalPages = data.total_pages;
          console.log(this.searchInfo);
          this.moviesList = data.results;
          this.page = 1;
          console.log(query);
          this.loading = false;
        });
    } else {
      this.api
        .getListOfMovies(
          environment.API_URL +
            'search/movie?api_key=' +
            environment.API_KEY +
            '&language=en-US&page=1&include_adult=false&query=' +
            encodeURI(query)
        )
        .subscribe((data: any) => {
          this.searchInfo = data;
          this.totalPages = data.total_pages;
          console.log(this.searchInfo);
          this.moviesList = data.results;
          this.page = 1;
          this.loading = false;
        });
    }
  }
  searchMoviesByPagination(paginationPage: number, query: string) {
    console.log('PAGINATION NUMBER', paginationPage);
    if (query.length == 0) {
      this.api
        .getListOfMovies(
          environment.API_URL +
            'search/movie?api_key=' +
            environment.API_KEY +
            '&language=en-US&page=' +
            paginationPage +
            '&include_adult=false&query=a'
        )
        .subscribe((data: any) => {
          this.searchInfo = data;
          console.log(this.searchInfo);
          this.moviesList = data.results;
          this.loading = false;
        });
    } else {
      this.api
        .getListOfMovies(
          environment.API_URL +
            'search/movie?api_key=' +
            environment.API_KEY +
            '&language=en-US&page=' +
            paginationPage +
            '&include_adult=false&query=' +
            encodeURI(query)
        )
        .subscribe((data: any) => {
          this.searchInfo = data;
          console.log(this.searchInfo);
          this.moviesList = data.results;
          this.loading = false;
        });
    }
  }

  ngOnInit(): void {
    // this.searchMovies(this.query);
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.searchValue = params.get('query');
      this.searchMovies(decodeURI(this.searchValue));
    });
  }
}
