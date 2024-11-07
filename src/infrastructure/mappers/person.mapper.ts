import type {PersonDetails} from '../../core/entitites/person.entity';
import type {MovieDBPeopleDetailsResponse} from '../interfaces/person-db.responses';

export class PersonMapper {
  static PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

  static fromMovieDBPeopleDetailsToEntity(response: MovieDBPeopleDetailsResponse): PersonDetails {
    return {
      avatar: response.profile_path
        ? `${this.PATH_IMAGE}${response.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
      biography: response.biography,
      birthday: response.birthday,
      deathday: response.deathday,
      gender: response.gender,
      name: response.name,
      placeBirth: response.place_of_birth,
    };
  }
}
