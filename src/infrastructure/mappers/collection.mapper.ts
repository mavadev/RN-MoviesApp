import type {MovieDBCollectionDetailsResponse} from '@interfaces/collection-db.responses';
import type {CollectionDetails} from '@entitites/collection.entity';
import {MediaMapper} from './media.mapper';

export class CollectionMapper {
  static PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

  static fromMovieDBCollectionToEntity(
    response: MovieDBCollectionDetailsResponse,
  ): CollectionDetails {
    return {
      name: response.name,
      description: response.overview,
      poster: `${CollectionMapper.PATH_IMAGE}${response.poster_path}`,
      backdrop: `${CollectionMapper.PATH_IMAGE}${response.backdrop_path}`,
      movies: response.parts
        .filter(media => media.poster_path)
        .map(media => MediaMapper.fromMediaResultToEntity(media)),
    };
  }
}
