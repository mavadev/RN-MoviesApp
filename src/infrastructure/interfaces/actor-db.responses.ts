import type {MovieDBMovieResponse} from './movie-db.responses';
import {MovieDBTvSerieResponse} from './tv_serie-db.responses';

// Details
export interface MovieDBPeopleDetailsResponse {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: Date;
  deathday: null;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

// Movies Credits
export interface MovieDBPeopleMoviesResponse {
  cast: MovieCast[];
  crew: MovieCast[];
  id: number;
}

export interface MovieCast extends MovieDBMovieResponse {
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
}

// TV Credits
export interface MovieDBPeopleTvCreditsResponse {
  cast: SerieCast[];
  crew: SerieCast[];
  id: number;
}

export interface SerieCast extends MovieDBTvSerieResponse {
  character?: string;
  credit_id: string;
  episode_count: number;
  department?: string;
  job?: string;
}
