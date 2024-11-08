import {Company, Media} from './media.entity';

export interface TvSerieDetails {
  backdrop: string;
  companies: Company[];
  description: string;
  firstDate: Date;
  genres: string[];
  homepage: string;
  id: number;
  poster: string;
  rating: number;
  seasons: Media[];
  status: string;
  title: string;
  type: string;
}
