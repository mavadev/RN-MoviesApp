import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {MovieDBMovieImagesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import type {MovieImage} from '../../entitites/movie.entity';

interface ListImages {
  logo: MovieImage | null;
  captures: MovieImage[];
}

export const getImagesUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<ListImages> => {
  try {
    // Obtener datoss en español
    let {logos, backdrops} = await fetcher.get<MovieDBMovieImagesResponse>(`/${movieId}/images`);

    // Si no hay logos o backdrops en español, intenta en inglés
    if (logos.length === 0) {
      ({logos, backdrops} = await fetcher.get<MovieDBMovieImagesResponse>(`/${movieId}/images`, {
        params: {language: 'en'},
      }));
    }
    const logo = logos.length > 0 ? MovieMapper.fromMovieDBImageToEntity(logos[0]) : null;
    const captures = backdrops.map(MovieMapper.fromMovieDBImageToEntity);

    return {
      logo,
      captures,
    };
  } catch (error) {
    throw new Error(`Cannot get images of the movie: ${error}`);
  }
};
