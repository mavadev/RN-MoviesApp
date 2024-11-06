import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PeopleMapper} from '../../../infrastructure/mappers/person.mapper';
import type {MovieDBPeopleDetailsResponse} from '../../../infrastructure/interfaces/person-db.responses';
import type {PersonDetails} from '../../entitites/person.entity';

export const getPeopleByIdUseCase = async (
  fetcher: HttpAdapter,
  peopleId: number,
): Promise<PersonDetails> => {
  try {
    const actor = await fetcher.get<MovieDBPeopleDetailsResponse>(`/person/${peopleId}`);
    return PeopleMapper.fromMovieDBPeopleDetailsToEntity(actor);
  } catch (error) {
    throw new Error(`Cannot get actor by id (${peopleId}): ${error}`);
  }
};
