import {MovieDBMediaResponse} from './media-db.responses';

// Details
export interface MovieDBCollectionDetailsResponse {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  parts: MovieDBMediaResponse[];
}
