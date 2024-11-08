import {useEffect, useState} from 'react';
import {movieDBFetcher} from '@adapters/movieDB.adapter';
import type {MovieDetails} from '@entitites/movie.entity';
import type {Media, Cast, MediaImage} from '@entitites/media.entity';

import {getMovieByIdUseCase} from '@use-cases/movie/get-movie-by-id.use-case';
import {
  getMediaCreditsUseCase,
  getMediaImagesUseCase,
  getSimilarMediaUseCase,
} from '@use-cases/media';

interface Images {
  logo: MediaImage | null;
  captures: MediaImage[];
}

interface MovieState {
  movie: MovieDetails;
  cast: Cast[];
  images: Images;
  similar: Media[];
}

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieState, setMovieState] = useState<MovieState>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    !isLoading && setIsLoading(true);

    const moviePromise = getMovieByIdUseCase(movieDBFetcher, movieId);
    const castPromise = getMediaCreditsUseCase(movieDBFetcher, movieId);
    const imagesPromise = getMediaImagesUseCase(movieDBFetcher, movieId);
    const similarPromise = getSimilarMediaUseCase(movieDBFetcher, movieId);

    const [movie, cast, images, similar] = await Promise.all([
      moviePromise,
      castPromise,
      imagesPromise,
      similarPromise,
    ]);

    setMovieState({
      movie,
      cast,
      images,
      similar,
    });
    setIsLoading(false);
  };

  return {
    ...movieState,
    isLoading,
  };
};
