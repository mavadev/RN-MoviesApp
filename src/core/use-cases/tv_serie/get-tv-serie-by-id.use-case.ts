import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {TvSerieMapper} from '../../../infrastructure/mappers/tv_serie.mapper';
import type {MovieDBTvSerieDetailsResponse} from '../../../infrastructure/interfaces/tv_serie-db.responses';
import type {TvSerieDetails} from '../../entitites/tv_serie.entity';

export const getTvSerieByIdUseCase = async (
  fetcher: HttpAdapter,
  tvSerieId: number,
): Promise<TvSerieDetails> => {
  try {
    const tvSerieDetails = await fetcher.get<MovieDBTvSerieDetailsResponse>(`/tv/${tvSerieId}`);
    return TvSerieMapper.fromTvSerieDetailsResultToEntity(tvSerieDetails);
  } catch (error) {
    console.log('ERROR SERIE ID');
    throw new Error(`Error fetching the tv serie with ID ${tvSerieId}: ${error}`);
  }
};
