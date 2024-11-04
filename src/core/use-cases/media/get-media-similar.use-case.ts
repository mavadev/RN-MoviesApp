import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MediaMapper} from '../../../infrastructure/mappers/media.mapper';
import type {MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import type {Media} from '../../entitites/media.entity';

export const getSimilarMediaUseCase = async (
  fetcher: HttpAdapter,
  mediaId: number,
  mediaType: Media['mediaType'] = 'movie',
): Promise<Media[]> => {
  try {
    const {results} = await fetcher.get<MovieDBMoviesResponse>(`/${mediaType}/${mediaId}/similar`);
    return results.map(result => MediaMapper.fromMediaResultToEntity(result, mediaType));
  } catch (error) {
    console.log('ERROR MEDIA SIMILAR');
    throw new Error(`Cannot get similiar medias of ${mediaType} ${mediaId}: ${error}`);
  }
};
