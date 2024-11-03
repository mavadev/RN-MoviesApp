import {MovieDBMediaDetailsResponse, MovieDBMediaResponse} from './media-db.responses';

// Movies
export interface MovieDBMoviesResponse {
  page: number;
  results: MovieDBMovieResponse[];
  total_pages: number;
  total_results: number;
}

// Movie
export interface MovieDBMovieResponse extends MovieDBMediaResponse {
  original_title: string;
  release_date: Date;
  title: string;
  video: boolean;
}

// Movie Details
export interface MovieDBMovieDetailsResponse extends MovieDBMediaDetailsResponse {
  belongs_to_collection: MovieDBMovieCollection | null;
  budget: number;
  imdb_id: string;
  original_title: string;
  release_date: Date;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
}
export interface MovieDBMovieCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
