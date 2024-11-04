import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {MovieDBPeopleMoviesResponse} from '../../../infrastructure/interfaces/actor-db.responses';
import type {Media} from '../../entitites/media.entity';

export const getPeopleMoviesUseCase = async (
  fetcher: HttpAdapter,
  actorID: number,
): Promise<Media[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBPeopleMoviesResponse>(
      `/person/${actorID}/movie_credits`,
    );
    return cast.map(MovieMapper.fromMovieResultToMovieEntity);
  } catch (error) {
    throw new Error(`Error fetching people movies: ${error}`);
  }
};
