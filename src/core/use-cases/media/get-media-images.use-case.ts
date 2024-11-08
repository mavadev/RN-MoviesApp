import {HttpAdapter} from '@adapters/http/http.adapter';
import {MediaMapper} from '@mappers/media.mapper';
import type {MovieDBMediaImagesResponse} from '@interfaces/media-db.responses';
import type {Media, MediaImage} from '@entities/media.entity';

interface ListImages {
  logo: MediaImage | null;
  captures: MediaImage[];
}

export const getMediaImagesUseCase = async (
  fetcher: HttpAdapter,
  mediaId: number,
  mediaType: Media['mediaType'] = 'movie',
): Promise<ListImages> => {
  try {
    // Obtener logo en español
    let {logos} = await fetcher.get<MovieDBMediaImagesResponse>(`/${mediaType}/${mediaId}/images`);

    // Capturas (lenguaje en null)
    const {backdrops} = await fetcher.get<MovieDBMediaImagesResponse>(
      `/${mediaType}/${mediaId}/images`,
      {
        params: {language: null},
      },
    );

    // Obtener logo en inglés, caso no exista en español
    if (logos.length <= 0) {
      ({logos} = await fetcher.get<MovieDBMediaImagesResponse>(`/${mediaType}/${mediaId}/images`, {
        params: {language: 'en'},
      }));
    }

    const logo = logos.length > 0 ? MediaMapper.fromMovieDBImageToEntity(logos[0]) : null;
    const captures = backdrops.map(MediaMapper.fromMovieDBImageToEntity);

    return {
      logo,
      captures,
    };
  } catch (error) {
    console.log('ERROR MEDIA IMAGES');
    throw new Error(`Cannot get images of the ${mediaType}: ${error}`);
  }
};
