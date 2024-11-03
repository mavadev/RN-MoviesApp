import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MediaMapper} from '../../../infrastructure/mappers/media.mapper';
import type {MovieDBMediaListResponse} from '../../../infrastructure/interfaces/media-db.responses';
import type {Movie} from '../../entitites/movie.entity';

interface Options {
  page?: number;
}

export const getTrendingAllUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const trendingList = await fetcher.get<MovieDBMediaListResponse>('/trending/all/week', {
      params: {
        page: options?.page ?? 1,
      },
    });
    return trendingList.results.map(MediaMapper.fromTvSerieResultToEntity);
  } catch (error) {
    throw new Error(`Error fetching all trending: ${error}`);
  }
};
