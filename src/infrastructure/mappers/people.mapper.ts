import {MediaMapper} from './media.mapper';
import type {MovieDBPeoplePopularResponse} from '../interfaces/people-db.responses';
import type {PeoplePopular} from '../../core/entitites/people.entity';

export class PeopleMapper {
  static PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

  static fromMovieDBPeoplePopularToEntity(response: MovieDBPeoplePopularResponse): PeoplePopular {
    return {
      page: response.page,
      totalPages: response.total_pages,
      persons: response.results.map(person => ({
        id: person.id,
        name: person.name,
        workDepartment: person.known_for_department,
        avatar: `${this.PATH_IMAGE}${person.profile_path}`,
        trajectory: person.known_for.map(media => MediaMapper.fromMediaResultToEntity(media)),
      })),
    };
  }
}
