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

interface MovieState {
  logo: MediaImage | null;
  captures: MediaImage[];
  details: MovieDetails;
  cast: Cast[];
  crew: Cast[];
  similar: Media[];
}

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<MovieState>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    !isLoading && setIsLoading(true);

    const fullMoviePromise = getMovieByIdUseCase(movieDBFetcher, movieId);
    const castPromise = getMediaCreditsUseCase(movieDBFetcher, movieId);
    const imagesPromise = getMediaImagesUseCase(movieDBFetcher, movieId);
    const moviesSimilarPromise = getSimilarMediaUseCase(movieDBFetcher, movieId);

    const [fullMovie, credits, images, moviesSimilar] = await Promise.all([
      fullMoviePromise,
      castPromise,
      imagesPromise,
      moviesSimilarPromise,
    ]);

    setMovie({
      logo: images.logo,
      captures: images.captures,
      details: fullMovie,
      cast: credits.cast,
      crew: credits.crew,
      similar: moviesSimilar,
    });
    setIsLoading(false);
  };

  return {
    ...movie,
    isLoading,
  };
};
