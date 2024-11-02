import {useEffect, useState} from 'react';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {getMovieByIdUseCase} from '../../core/use-cases/movie/get-by-id.use-case';
import {getMovieCastUseCase} from '../../core/use-cases/movie/get-cast.use-case';
import {getImagesUseCase} from '../../core/use-cases/movie/get-images.use-case';
import type {FullMovie, MovieImage} from '../../core/entitites/movie.entity';
import type {Cast} from '../../core/entitites/cast.entity';

interface MovieState {
  logo: MovieImage | null;
  captures: MovieImage[];
  details: FullMovie;
  actors: Cast[];
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

    const [fullMovie, actors, images] = await Promise.all([
      fullMoviePromise,
      castPromise,
      imagesPromise,
    ]);

    setMovie({
      logo: images.logo,
      captures: images.captures,
      details: fullMovie,
      actors,
    });
    setIsLoading(false);
  };

  return {
    ...movie,
    isLoading,
  };
};
