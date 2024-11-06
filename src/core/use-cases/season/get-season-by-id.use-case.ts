import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {SeasonMapper} from '../../../infrastructure/mappers/season.mapper';
import type {MovieDBSeasonDetailsResponse} from '../../../infrastructure/interfaces/season-db.responses';
import type {SeasonDetails} from '../../entitites/season.entity';

export const getSeasonByIdUseCase = async (
  fetcher: HttpAdapter,
  serieID: number,
  seasonNumber: number,
): Promise<SeasonDetails> => {
  try {
    const season = await fetcher.get<MovieDBSeasonDetailsResponse>(
      `/tv/${serieID}/season/${seasonNumber}`,
    );
    return SeasonMapper.fromMovieDBSeasonDetailsToEntity(season);
  } catch (error) {
    throw new Error(`Error fetching the season ${seasonNumber} in serie ${serieID}: ${error}`);
  }
};
