export interface Movie {
  id: number;
  title: string;
  poster: string;
}

export interface FullMovie extends Movie {
  description: string;
  releaseDate: Date;
  rating: number;
  backdrop: string;
  budget: number;
  collection: Collection | null;
  duration: number;
  genres: string[];
  homepage: string;
  isRestricted: boolean;
  productionCompanies: string[];
  status: string;
}

export interface Collection {
  id: number;
  name: string;
  poster: string;
  backdrop: string;
}

export interface MovieImage {
  url: string;
  asp_ratio: number;
}
