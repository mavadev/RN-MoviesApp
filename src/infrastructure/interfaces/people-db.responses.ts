import type {MovieDBMediaResponse} from './media-db.responses';

export interface MovieDBPeoplePopularResponse {
  page: number;
  results: MovieDBPerson[];
  total_pages: number;
  total_results: number;
}

export interface MovieDBPerson {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: KnownForDepartment;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: KnownFor[];
}

export enum KnownForDepartment {
  Acting = 'Acting',
}

export interface KnownFor extends MovieDBMediaResponse {
  original_title?: string;
  release_date?: Date;
  video?: boolean;
  original_name?: string;
  first_air_date?: Date;
  origin_country?: string[];
}
