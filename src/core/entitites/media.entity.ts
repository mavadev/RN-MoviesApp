export interface Media {
  backdrop: string;
  id: number;
  poster: string;
  title: string;
  mediaType: 'movie' | 'tv';
}
export interface Cast {
  id: number;
  name: string;
  character: string;
  avatar: string;
}
