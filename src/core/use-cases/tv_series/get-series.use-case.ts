import {HttpAdapter} from '@adapters/http/http.adapter';
import {MediaMapper} from '@mappers/media.mapper';
import type {MovieDBTvSeriesResponse} from '@interfaces/tv_serie-db.responses';
import type {Media} from '@entitites/media.entity';

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
    const series = await fetcher.get<MovieDBTvSeriesResponse>(pathURL, {
      params: {
        page: options?.page ?? 1,
      },
    });
    return series.results.map(result => MediaMapper.fromMediaResultToEntity(result, 'tv'));
  } catch (error) {
    console.log('ERROR EN SERIES');
    throw new Error(`Error fetching series - ${pathURL}: ${error}`);
  }
};
