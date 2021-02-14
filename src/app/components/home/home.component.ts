import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: any[] = [];
  topRatedMovies: any[] = [];
  upcomingMovies: any[] = [];
  constructor(public api: ApiService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.api
      .getListOfMovies(
        'https://api.themoviedb.org/3/movie/popular?api_key=27337898bc0c9b2c97bc056520acb400&language=en-US&page=1'
      )
      .subscribe((data: any) => {
        this.popularMovies = data.results;
      });

    this.api
      .getListOfMovies(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=27337898bc0c9b2c97bc056520acb400&language=en-US&page=1'
      )
      .subscribe((data: any) => {
        this.topRatedMovies = data.results;
      });

    this.api
      .getListOfMovies(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=27337898bc0c9b2c97bc056520acb400&language=en-US&page=1'
      )
      .subscribe((data: any) => {
        this.upcomingMovies = data.results;
      });
  }
}
