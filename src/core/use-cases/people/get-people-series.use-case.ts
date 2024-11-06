import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MediaMapper} from '../../../infrastructure/mappers/media.mapper';
import type {MovieDBPeopleTvCreditsResponse} from '../../../infrastructure/interfaces/actor-db.responses';
import type {Media} from '../../entitites/media.entity';

export const getPeopleSeriesUseCase = async (
  fetcher: HttpAdapter,
  actorID: number,
): Promise<Media[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBPeopleTvCreditsResponse>(
      `/person/${actorID}/tv_credits`,
    );
    return cast.map(serie => MediaMapper.fromMediaResultToEntity(serie, 'tv'));
  } catch (error) {
    throw new Error(`Error fetching people movies: ${error}`);
  }
};
