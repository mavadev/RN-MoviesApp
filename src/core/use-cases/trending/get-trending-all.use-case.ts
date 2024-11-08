import {HttpAdapter} from '@adapters/http/http.adapter';
import {MediaMapper} from '@mappers/media.mapper';
import type {MovieDBMediaListResponse} from '@interfaces/media-db.responses';
import type {Media} from '@entities/media.entity';

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
    return trendingList.results.map(media => MediaMapper.fromMediaResultToEntity(media));
  } catch (error) {
    console.log('ERROR EN TRENDING');
    throw new Error(`Error fetching all trending: ${error}`);
  }
};
