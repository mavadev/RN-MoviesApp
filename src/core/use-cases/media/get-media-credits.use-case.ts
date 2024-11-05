import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MediaMapper} from '../../../infrastructure/mappers/media.mapper';
import type {MovieDBMediaCreditsResponse} from '../../../infrastructure/interfaces/media-db.responses';
import type {Cast, Media} from '../../entitites/media.entity';

export const getMediaCreditsUseCase = async (
  fetcher: HttpAdapter,
  mediaId: number,
  mediaType: Media['mediaType'] = 'movie',
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBMediaCreditsResponse>(
      `/${mediaType}/${mediaId}/credits`,
    );
    return cast.map(MediaMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log('ERROR MEDIA CAST');
    throw new Error(`Cannot get ${mediaType} cast ${mediaId}`);
  }
};
