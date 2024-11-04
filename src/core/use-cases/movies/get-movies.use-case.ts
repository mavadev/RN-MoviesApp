import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import type {Media} from '../../entitites/media.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const getMoviesUseCase = async (
  fetcher: HttpAdapter,
  pathURL: string,
  options?: Options,
): Promise<Media[]> => {
  try {
    const nowPlaying = await fetcher.get<MovieDBMoviesResponse>(pathURL, {
      params: {
        page: options?.page ?? 1,
      },
    });
    return nowPlaying.results.map(MovieMapper.fromMovieResultToMovieEntity);
  } catch (err) {
    throw new Error(`Error fetching movies - ${pathURL}: ${err}`);
  }
};
