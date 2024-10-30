import {useEffect, useState} from 'react';
import {getMovieByIdUseCase} from '../../core/use-cases/movie/get-by-id.use-case';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import type {FullMovie} from '../../core/entitites/movie.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    !isLoading && setIsLoading(true);

    const movie = await getMovieByIdUseCase(movieDBFetcher, movieId.toString());

    setMovie(movie);
    setIsLoading(false);
  };

  return {
    movie,
    isLoading,
  };
};
