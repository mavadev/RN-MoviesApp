import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MediaMapper} from '../../../infrastructure/mappers/media.mapper';
import type {MovieDBMediaCreditsResponse} from '../../../infrastructure/interfaces/media-db.responses';
import type {Cast} from '../../entitites/media.entity';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBMediaCreditsResponse>(`/movie/${movieId}/credits`);
    const actors = cast.map(MediaMapper.fromMovieDBCastToEntity);
    return actors;
  } catch (error) {
    throw new Error(`Cannot get movie cast ${movieId}`);
  }
};
