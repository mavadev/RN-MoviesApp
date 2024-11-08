import {HttpAdapter} from '@adapters/http/http.adapter';
import {MediaMapper} from '@mappers/media.mapper';
import type {MovieDBPeopleMoviesResponse} from '@interfaces/person-db.responses';
import type {Media} from '@entitites/media.entity';

export const getPeopleMoviesUseCase = async (
  fetcher: HttpAdapter,
  actorID: number,
): Promise<Media[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBPeopleMoviesResponse>(
      `/person/${actorID}/movie_credits`,
    );
    return cast.map(movie => MediaMapper.fromMediaResultToEntity(movie, 'movie'));
  } catch (error) {
    throw new Error(`Error fetching people movies: ${error}`);
  }
};
