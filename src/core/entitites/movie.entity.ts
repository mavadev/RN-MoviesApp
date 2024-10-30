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
  collection: Record<string, string | number> | null;
  duration: number;
  genres: string[];
  homepage: string;
  isRestricted: boolean;
  productionCompanies: string[];
  status: string;
}
