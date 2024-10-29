import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {MoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import type {Movie} from '../../entitites/movie.entity';

export const moviesPopularUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const popularMovies = await fetcher.get<MoviesResponse>('/popular');
    return popularMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (err) {
    throw new Error(`Error fetching movies - Popular: ${err}`);
  }
};
