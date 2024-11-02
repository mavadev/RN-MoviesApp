import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {CastMapper} from '../../../infrastructure/mappers/cast.mapper';
import type {MovieDBCastResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import type {Cast} from '../../entitites/cast.entity';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);
    const actors = cast.map(CastMapper.fromMovieDBCastToEntity);
    return actors;
  } catch (error) {
    throw new Error(`Cannot get movie cast ${movieId}`);
  }
};
