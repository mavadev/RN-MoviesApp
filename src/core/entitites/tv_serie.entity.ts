export interface TvSerie {
  id: number;
  title: string;
  poster: string;
  backdrop: string;
}

export interface TvSerieDetails extends TvSerie {
  description: string;
  firstDate: Date;
  genres: string[];
  homepage: string;
  companies: Company[];
  rating: number;
  seasons: Season[];
  status: string;
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
