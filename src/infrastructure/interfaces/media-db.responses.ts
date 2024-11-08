import type {MovieDBMovieResponse} from './movie-db.responses';
import type {MovieDBTvSerieResponse} from './tv_serie-db.responses';

// Media List Response
export interface MovieDBMediaListResponse {
  page: number;
  results: (MovieDBMovieResponse | MovieDBTvSerieResponse)[];
  total_pages: number;
  total_results: number;
}

// Media
export interface MovieDBMediaResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: 'movie' | 'tv';
  name: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title?: string;
  vote_average: number;
  vote_count: number;
}

// Media Details
export interface MovieDBMediaDetailsResponse {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  homepage: string;
  id: number;
  origin_country: string[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
}
export interface Genre {
  id: number;
  name: string;
}
export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

// Media Credits
export interface MovieDBMediaCreditsResponse {
  id: number;
  cast: MovieDBMediaCast[];
  crew: MovieDBMediaCast[];
}

// Media Cast
export interface MovieDBMediaCast {
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: Department;
  job?: string;
}
export enum Department {
  Acting = 'Acting',
  Art = 'Art',
  Camera = 'Camera',
  CostumeMakeUp = 'Costume & Make-Up',
  Crew = 'Crew',
  Directing = 'Directing',
  Editing = 'Editing',
  Lighting = 'Lighting',
  Production = 'Production',
  Sound = 'Sound',
  VisualEffects = 'Visual Effects',
  Writing = 'Writing',
}

// Media Images
export interface MovieDBMediaImagesResponse {
  backdrops: MovieDBImage[];
  id: number;
  logos: MovieDBImage[];
  posters: MovieDBImage[];
}

export interface MovieDBImage {
  aspect_ratio: number;
  height: number;
  iso_639_1: null | string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
