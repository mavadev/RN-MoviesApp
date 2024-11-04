import {Company} from './media.entity';

export interface MovieDetails {
  backdrop: string;
  budget: number;
  collection: Collection | null;
  description: string;
  duration: number;
  genres: string[];
  homepage: string;
  id: number;
  isRestricted: boolean;
  poster: string;
  companies: Company[];
  rating: number;
  releaseDate: Date;
  status: string;
  title: string;
}
export interface Collection {
  backdrop: string;
  id: number;
  name: string;
  poster: string;
}
