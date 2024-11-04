import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MediaMapper} from '../../../infrastructure/mappers/media.mapper';
import type {MovieDBMediaCreditsResponse} from '../../../infrastructure/interfaces/media-db.responses';
import type {Cast, Media} from '../../entitites/media.entity';

interface Credits {
  cast: Cast[];
  crew: Cast[];
}

export const getMediaCreditsUseCase = async (
  fetcher: HttpAdapter,
  mediaId: number,
  mediaType: Media['mediaType'] = 'movie',
): Promise<Credits> => {
  try {
    const {cast, crew} = await fetcher.get<MovieDBMediaCreditsResponse>(
      `/${mediaType}/${mediaId}/credits`,
    );

    const castMapped = cast.map(MediaMapper.fromMovieDBCastToEntity);
    const crewMapped = crew.map(MediaMapper.fromMovieDBCastToEntity);
    return {cast: castMapped, crew: crewMapped};
  } catch (error) {
    console.log('ERROR MEDIA CAST');
    throw new Error(`Cannot get ${mediaType} cast ${mediaId}`);
  }
};
