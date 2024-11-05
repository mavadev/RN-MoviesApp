import {useEffect, useState} from 'react';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import type {MovieDetails} from '../../core/entitites/movie.entity';
import type {Media, Cast, MediaImage} from '../../core/entitites/media.entity';

import {
  getMediaCreditsUseCase,
  getMediaImagesUseCase,
  getSimilarMediaUseCase,
} from '../../core/use-cases/media';
import {getMovieByIdUseCase} from '../../core/use-cases/movie/get-movie-by-id.use-case';

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
