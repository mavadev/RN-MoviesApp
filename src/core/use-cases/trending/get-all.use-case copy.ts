import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MediaMapper} from '../../../infrastructure/mappers/media.mapper';
import type {MovieDBMediaListResponse} from '../../../infrastructure/interfaces/media-db.responses';
import type {Media} from '../../entitites/media.entity';

interface Options {
  page?: number;
}

export const getTrendingAllUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Media[]> => {
  try {
    const trendingList = await fetcher.get<MovieDBMediaListResponse>('/trending/all/week', {
      params: {
        page: options?.page ?? 1,
      },
    });
    return trendingList.results.map(MediaMapper.fromMediaResultToEntity);
  } catch (error) {
    console.log('ERROR EN TRENDING');
    throw new Error(`Error fetching all trending: ${error}`);
  }
};
