import {HttpAdapter} from '@adapters/http/http.adapter';
import {MediaMapper} from '@mappers/media.mapper';
import type {MovieDBPeopleTvCreditsResponse} from '@interfaces/person-db.responses';
import type {Media} from '@entitites/media.entity';

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
