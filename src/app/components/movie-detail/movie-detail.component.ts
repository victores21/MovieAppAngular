import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieId: string = '';
  movieDetails: any[] = [];

  constructor(public api: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.movieId = data.id;
    });

    this.api
      .getListOfMovies(
        'https://api.themoviedb.org/3/movie/' +
          this.movieId +
          '?api_key=27337898bc0c9b2c97bc056520acb400&language=en-US'
      )
      .subscribe((data: any) => {
        this.movieDetails = data.results;
      });
  }
}
