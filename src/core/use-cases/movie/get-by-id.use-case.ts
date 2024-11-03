import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {MovieDBMovieDetailsResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import type {FullMovie} from '../../entitites/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieID: string,
): Promise<FullMovie> => {
  try {
    const movieDetails = await fetcher.get<MovieDBMovieDetailsResponse>(`/movie/${movieID}`);
    return MovieMapper.fromFullMovieResultToFullMovieEntity(movieDetails);
  } catch (error) {
    throw new Error(`Error fetching the movie with ID ${movieID}: ${error}`);
  }
};
