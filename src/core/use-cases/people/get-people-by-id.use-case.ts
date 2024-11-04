import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PeopleMapper} from '../../../infrastructure/mappers/people.mapper';
import type {MovieDBPeopleDetailsResponse} from '../../../infrastructure/interfaces/actor-db.responses';
import type {PeopleDetails} from '../../entitites/people.entity';

export const getPeopleByIdUseCase = async (
  fetcher: HttpAdapter,
  peopleId: number,
): Promise<PeopleDetails> => {
  try {
    const actor = await fetcher.get<MovieDBPeopleDetailsResponse>(`/person/${peopleId}`);
    return PeopleMapper.fromMovieDBPeopleDetailsToEntity(actor);
  } catch (error) {
    throw new Error(`Cannot get actor by id (${peopleId}): ${error}`);
  }
};
