export interface SeasonDetails {
  id: number;
  name: string;
  poster: string;
  airDate: string;
  description: string;
  seasonNumber: number;
  episodes: Episode[];
}

export interface Episode {
  id: number;
  name: string;
  image: string;
  rating: number;
  number: number;
  airDate: string;
  description: string;
}
