import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {TvSerieMapper} from '../../../infrastructure/mappers/tv_serie.mapper';
import type {MovieDBTvSeriesResponse} from '../../../infrastructure/interfaces/tv_serie-db.responses';
import type {TvSerie} from '../../entitites/tv_serie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const getTvSeriesUseCase = async (
  fetcher: HttpAdapter,
  pathURL: string,
  options?: Options,
): Promise<TvSerie[]> => {
  try {
    const nowPlaying = await fetcher.get<MovieDBTvSeriesResponse>(pathURL, {
      params: {
        page: options?.page ?? 1,
      },
    });
    return nowPlaying.results.map(TvSerieMapper.fromTvSerieResultToEntity);
  } catch (error) {
    throw new Error(`Error fetching series - ${pathURL}: ${error}`);
  }
};
