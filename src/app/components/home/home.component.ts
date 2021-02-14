import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: any[] = [];
  topRatedMovies: any[] = [];
  upcomingMovies: any[] = [];
  isPopularMoviesloading: boolean = true;
  isTopRatedMoviesloading: boolean = true;
  isUpcomingMoviesloading: boolean = true;

  constructor(
    public api: ApiService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  isEverythingLoaded() {
    if (
      this.isPopularMoviesloading ||
      this.isTopRatedMoviesloading ||
      this.isUpcomingMoviesloading
    ) {
      return false;
    } else {
      return true;
    }
  }
  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe((data) => {
    //   console.log(data);
    // });
    this.spinner.show();
    this.api
      .getListOfMovies(
        'https://api.themoviedb.org/3/movie/popular?api_key=27337898bc0c9b2c97bc056520acb400&language=en-US&page=1'
      )
      .subscribe((data: any) => {
        this.popularMovies = data.results;
        this.isPopularMoviesloading = false;
        if (this.isEverythingLoaded()) {
          this.spinner.hide();
        }
      });

    this.api
      .getListOfMovies(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=27337898bc0c9b2c97bc056520acb400&language=en-US&page=1'
      )
      .subscribe((data: any) => {
        this.topRatedMovies = data.results;
        this.isTopRatedMoviesloading = false;
        if (this.isEverythingLoaded()) {
          this.spinner.hide();
        }
      });

    this.api
      .getListOfMovies(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=27337898bc0c9b2c97bc056520acb400&language=en-US&page=1'
      )
      .subscribe((data: any) => {
        this.upcomingMovies = data.results;
        this.isUpcomingMoviesloading = false;
        if (this.isEverythingLoaded()) {
          this.spinner.hide();
        }
      });
  }
}
