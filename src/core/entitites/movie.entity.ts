export interface FullMovie {
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
  productionCompanies: string[];
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

export interface MovieImage {
  asp_ratio: number;
  url: string;
}
