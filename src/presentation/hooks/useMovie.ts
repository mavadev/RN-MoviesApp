import {useEffect, useState} from 'react';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {getMovieByIdUseCase} from '../../core/use-cases/movie/get-by-id.use-case';
import {getMovieCastUseCase} from '../../core/use-cases/movie/get-cast.use-case';
import type {FullMovie} from '../../core/entitites/movie.entity';
import type {Cast} from '../../core/entitites/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [actors, setActors] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    !isLoading && setIsLoading(true);

    const fullMoviePromise = getMovieByIdUseCase(movieDBFetcher, movieId.toString());
    const castPromise = getMovieCastUseCase(movieDBFetcher, movieId);

    const [fullMovie, actors] = await Promise.all([fullMoviePromise, castPromise]);

    setMovie(fullMovie);
    setActors(actors);
    setIsLoading(false);
  };

  return {
    movie,
    actors,
    isLoading,
  };
};
