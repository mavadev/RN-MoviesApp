// Details
export interface MovieDBSeasonDetailsResponse {
  _id: string;
  air_date: string;
  episodes: MovieDbEpisode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface MovieDbEpisode {
  air_date: string;
  episode_number: number;
  episode_type: EpisodeType;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: Crew[];
  guest_stars: Crew[];
}

export interface Crew {
  job?: string;
  department?: Department;
  credit_id: string;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  character?: string;
  order?: number;
}

export enum Department {
  Acting = 'Acting',
  Directing = 'Directing',
  VisualEffects = 'Visual Effects',
  Writing = 'Writing',
}

export enum EpisodeType {
  Standard = 'standard',
}
