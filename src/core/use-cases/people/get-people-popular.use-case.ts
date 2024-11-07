import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PeopleMapper} from '../../../infrastructure/mappers/people.mapper';
import type {MovieDBPeoplePopularResponse} from '../../../infrastructure/interfaces/people-db.responses';
import type {PeoplePopular} from '../../entitites/people.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const getPeoplePopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<PeoplePopular> => {
  try {
    const peoplePopular = await fetcher.get<MovieDBPeoplePopularResponse>('/person/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });
    return PeopleMapper.fromMovieDBPeoplePopularToEntity(peoplePopular);
  } catch (error) {
    throw new Error(`Error fetching movies: ${error}`);
  }
};
