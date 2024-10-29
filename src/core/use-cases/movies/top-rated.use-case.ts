import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {MoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import type {Movie} from '../../entitites/movie.entity';

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const moviesTopRated = await fetcher.get<MoviesResponse>('/top_rated');
    return moviesTopRated.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (err) {
    throw new Error(`Error fetching movies - Top Rated: ${err}`);
  }
};
