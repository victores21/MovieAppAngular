export interface ListOfMoviesQuery {
  page: number;
  results: string[];
  total_pages: number;
  total_results: number;
}

export interface ListOfMovies {
  adult: number;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
