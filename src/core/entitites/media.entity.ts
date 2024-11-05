export interface Media {
  id: number;
  title: string;
  poster: string | null;
  backdrop: string | null;
  mediaType: 'movie' | 'tv' | 'season';
}
export interface Cast {
  id: number;
  name: string;
  character: string;
  avatar: string;
}
export interface MediaImage {
  asp_ratio: number;
  url: string;
}
export interface Company {
  id: number;
  name: string;
  logo: null | string;
}
