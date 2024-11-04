import type {PeopleDetails} from '../../core/entitites/people.entity';
import type {MovieDBPeopleDetailsResponse} from '../interfaces/actor-db.responses';

export class PeopleMapper {
  static PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

  static fromMovieDBPeopleDetailsToEntity(response: MovieDBPeopleDetailsResponse): PeopleDetails {
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
