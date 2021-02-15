import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from 'src/environments/environment';
import { ListOfMovies } from 'src/app/shared/interfaces/listOfMovies.interface';
import { CastList } from 'src/app/shared/interfaces/castList.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieId: any;
  movieDetail: any = {};
  similarMovies: ListOfMovies[] = [];
  castList: CastList[] = [];
  isError: boolean = false;
  isMovieLoaded: boolean = false;

  constructor(
    public api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.movieId = params.get('id');
      //Movie Detail
      this.api
        .getMovieDetail(
          environment.API_URL +
            'movie/' +
            this.movieId +
            '?api_key=' +
            environment.API_KEY +
            '&language=en-US'
        )
        .subscribe(
          (data: any) => {
            this.movieDetail = data;
            console.log(data);
            this.isMovieLoaded = true;
          },
          (err) => {
            this.isError = true;
            this.isMovieLoaded = true;
          }
        );

      //Similar Movies
      this.api
        .getMovieDetail(
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

      //Cast
      this.api
        .getMovieDetail(
          environment.API_URL +
            'movie/' +
            this.movieId +
            '/credits?api_key=' +
            environment.API_KEY +
            '&language=en-US'
        )
        .subscribe((data: any) => {
          this.castList = data.cast;
          console.log(this.castList);
        });
    });
  }
}
