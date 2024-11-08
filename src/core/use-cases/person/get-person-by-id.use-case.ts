import {HttpAdapter} from '@adapters/http/http.adapter';
import {PersonMapper} from '@mappers/person.mapper';
import type {MovieDBPeopleDetailsResponse} from '@interfaces/person-db.responses';
import type {PersonDetails} from '@entities/person.entity';

export const getPeopleByIdUseCase = async (
  fetcher: HttpAdapter,
  peopleId: number,
): Promise<PersonDetails> => {
  try {
    const actor = await fetcher.get<MovieDBPeopleDetailsResponse>(`/person/${peopleId}`);
    return PersonMapper.fromMovieDBPeopleDetailsToEntity(actor);
  } catch (error) {
    throw new Error(`Cannot get actor by id (${peopleId}): ${error}`);
  }
};
