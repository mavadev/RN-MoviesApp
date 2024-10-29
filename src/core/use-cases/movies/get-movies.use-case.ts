import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {MoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import type {Movie} from '../../entitites/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const getMoviesUseCase = async (
  fetcher: HttpAdapter,
  pathURL: string,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<MoviesResponse>(pathURL, {
      params: {
        page: options?.page ?? 1,
      },
    });
    return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (err) {
    throw new Error(`Error fetching movies - ${pathURL}: ${err}`);
  }
};
