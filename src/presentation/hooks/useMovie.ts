import {useEffect, useState} from 'react';
import {
  getMovieByIdUseCase,
  getMovieCastUseCase,
  getImagesUseCase,
  getSimilarMoviesUseCase,
} from '../../core/use-cases/movie';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

import type {FullMovie, Movie, MovieImage} from '../../core/entitites/movie.entity';
import type {Cast} from '../../core/entitites/media.entity';

interface MovieState {
  logo: MovieImage | null;
  captures: MovieImage[];
  details: FullMovie;
  actors: Cast[];
  similar: Movie[];
}

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<MovieState>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    !isLoading && setIsLoading(true);

    const fullMoviePromise = getMovieByIdUseCase(movieDBFetcher, movieId.toString());
    const castPromise = getMovieCastUseCase(movieDBFetcher, movieId);
    const imagesPromise = getImagesUseCase(movieDBFetcher, movieId);
    const moviesSimilarPromise = getSimilarMoviesUseCase(movieDBFetcher, movieId);

    const [fullMovie, actors, images, moviesSimilar] = await Promise.all([
      fullMoviePromise,
      castPromise,
      imagesPromise,
      moviesSimilarPromise,
    ]);

    setMovie({
      logo: images.logo,
      captures: images.captures,
      details: fullMovie,
      actors,
      similar: moviesSimilar,
    });
    setIsLoading(false);
  };

  return {
    ...movie,
    isLoading,
  };
};
