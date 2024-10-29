import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {MoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import type {Movie} from '../../entitites/movie.entity';

export const moviesUpComingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const moviesUpcoming = await fetcher.get<MoviesResponse>('/upcoming');
    return moviesUpcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (err) {
    throw new Error(`Error fetching movies - Upcoming: ${err}`);
  }
};
