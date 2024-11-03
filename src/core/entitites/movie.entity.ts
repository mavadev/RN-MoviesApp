export interface Movie {
  backdrop: string;
  id: number;
  poster: string;
  title: string;
}

export interface FullMovie extends Movie {
  budget: number;
  collection: Collection | null;
  description: string;
  duration: number;
  genres: string[];
  homepage: string;
  isRestricted: boolean;
  productionCompanies: string[];
  rating: number;
  releaseDate: Date;
  status: string;
}

export interface Collection {
  backdrop: string;
  id: number;
  name: string;
  poster: string;
}

export interface MovieImage {
  asp_ratio: number;
  url: string;
}
