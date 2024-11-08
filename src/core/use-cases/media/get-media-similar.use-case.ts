import {HttpAdapter} from '@adapters/http/http.adapter';
import {MediaMapper} from '@mappers/media.mapper';
import type {MovieDBMoviesResponse} from '@interfaces/movie-db.responses';
import type {Media} from '@entities/media.entity';

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
