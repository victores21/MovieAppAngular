import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from 'src/environments/environment';
import { ListOfMovies } from 'src/app/shared/interfaces/listOfMovies.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: ListOfMovies[] = [];
  topRatedMovies: ListOfMovies[] = [];
  upcomingMovies: ListOfMovies[] = [];
  isPopularMoviesloading: boolean = true;
  isTopRatedMoviesloading: boolean = true;
  isUpcomingMoviesloading: boolean = true;

  constructor(public api: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.api
      .getListOfMovies(
        environment.API_URL +
          'movie/popular?api_key=' +
          environment.API_KEY +
          '&language=en-US&page=1'
      )
      .subscribe((data: any) => {
        this.popularMovies = data.results;
        console.log(this.popularMovies);
        this.isPopularMoviesloading = false;
      });

    this.api
      .getListOfMovies(
        environment.API_URL +
          'movie/top_rated?api_key=' +
          environment.API_KEY +
          '&language=en-US&page=1'
      )
      .subscribe((data: any) => {
        this.topRatedMovies = data.results;
        this.isTopRatedMoviesloading = false;
      });

    this.api
      .getListOfMovies(
        environment.API_URL +
          'movie/upcoming?api_key=' +
          environment.API_KEY +
          '&language=en-US&page=1'
      )
      .subscribe((data: any) => {
        this.upcomingMovies = data.results;
        this.isUpcomingMoviesloading = false;
      });
  }
}
