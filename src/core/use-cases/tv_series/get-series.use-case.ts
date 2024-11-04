import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MediaMapper} from '../../../infrastructure/mappers/media.mapper';
import type {MovieDBTvSeriesResponse} from '../../../infrastructure/interfaces/tv_serie-db.responses';
import type {Media} from '../../entitites/media.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const getTvSeriesUseCase = async (
  fetcher: HttpAdapter,
  pathURL: string,
  options?: Options,
): Promise<Media[]> => {
  try {
    const nowPlaying = await fetcher.get<MovieDBTvSeriesResponse>(pathURL, {
      params: {
        page: options?.page ?? 1,
      },
    });
    return nowPlaying.results.map(MediaMapper.fromMediaResultToEntity);
  } catch (error) {
    console.log('ERROR EN SERIES');
    throw new Error(`Error fetching series - ${pathURL}: ${error}`);
  }
};
