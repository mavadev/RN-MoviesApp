import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import type {Media} from '../../entitites/media.entity';

export const getSimilarMoviesUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Media[]> => {
  try {
    const {results} = await fetcher.get<MovieDBMoviesResponse>(`/movie/${movieId}/similar`);
    return results.map(MovieMapper.fromMovieResultToMovieEntity);
  } catch (error) {
    throw new Error(`Cannot get similiar movies of movie ${movieId}: ${error}`);
  }
};
