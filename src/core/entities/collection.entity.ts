import {Media} from './media.entity';

export interface CollectionDetails {
  name: string;
  poster: string | null;
  backdrop: string | null;
  description: string;
  movies: Media[];
}
