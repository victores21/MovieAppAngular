import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieId: any;
  movieDetail: any = {};
  similarMovies: any[] = [];
  castList: any[] = [];
  constructor(
    public api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('CARANDO');
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.movieId = params.get('id');

      this.api
        .getListOfMovies(
          environment.API_URL +
            'movie/' +
            this.movieId +
            '?api_key=' +
            environment.API_KEY +
            '&language=en-US'
        )
        .subscribe((data: any) => {
          this.movieDetail = data;
          console.log('movie detail', this.movieDetail);
        });

      this.api
        .getListOfMovies(
          environment.API_URL +
            'movie/' +
            this.movieId +
            '/similar?api_key=' +
            environment.API_KEY +
            '&language=en-US&page=1'
        )
        .subscribe((data: any) => {
          this.similarMovies = data.results;
        });

      this.api
        .getListOfMovies(
          environment.API_URL +
            'movie/' +
            this.movieId +
            '/credits?api_key=' +
            environment.API_KEY +
            '&language=en-US'
        )
        .subscribe((data: any) => {
          this.castList = data.cast;
          console.log('cast list', this.castList);
        });
    });
  }
}
