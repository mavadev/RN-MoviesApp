import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {MovieDBMediaImagesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
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
    // Obtener logo en español
    let {logos} = await fetcher.get<MovieDBMediaImagesResponse>(`/movie/${movieId}/images`);

    // Capturas de la Película (lenguaje en null)
    const {backdrops} = await fetcher.get<MovieDBMediaImagesResponse>(`/movie/${movieId}/images`, {
      params: {language: null},
    });

    // Obtener logo en inglés, caso no exista en español
    if (logos.length <= 0) {
      ({logos} = await fetcher.get<MovieDBMediaImagesResponse>(`/movie/${movieId}/images`, {
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
