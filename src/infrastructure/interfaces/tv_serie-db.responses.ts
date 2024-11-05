import {
  MovieDBMediaResponse,
  MovieDBMediaDetailsResponse,
  ProductionCompany,
} from './media-db.responses';

// Tv Series
export interface MovieDBTvSeriesResponse {
  page: number;
  results: MovieDBTvSerieResponse[];
  total_pages: number;
  total_results: number;
}

// Tv Serie
export interface MovieDBTvSerieResponse extends MovieDBMediaResponse {
  first_air_date: Date;
  origin_country: string[];
  original_name: string;
}

// Tv Serie Details
export interface MovieDBTvSerieDetailsResponse extends MovieDBMediaDetailsResponse {
  created_by: CreatedBy[];
  episode_run_time: any[];
  first_air_date: Date;
  in_production: boolean;
  languages: string[];
  last_air_date: Date;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  networks: ProductionCompany[];
  next_episode_to_air: null;
  number_of_episodes: number;
  number_of_seasons: number;
  original_name: string;
  seasons: MovieDBMediaResponse[];
  type: string;
}
export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string;
}
export interface LastEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: Date;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}
