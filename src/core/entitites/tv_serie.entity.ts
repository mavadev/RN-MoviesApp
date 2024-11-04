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
  seasons: Season[];
  status: string;
  title: string;
  type: string;
}
export interface Company {
  id: number;
  name: string;
  logo: null | string;
}
export interface Season {
  airDate: Date;
  description: string;
  episodeCount: number;
  id: number;
  poster: string;
  rating: number;
  seasonNumber: number;
  title: string;
}
