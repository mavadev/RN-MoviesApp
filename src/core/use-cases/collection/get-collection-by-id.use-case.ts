import {HttpAdapter} from '@adapters/http/http.adapter';
import {CollectionMapper} from '@mappers/collection.mapper';
import type {MovieDBCollectionDetailsResponse} from '@interfaces/collection-db.responses';
import type {CollectionDetails} from '@entitites/collection.entity';

export const getCollectionByIdUseCase = async (
  fetcher: HttpAdapter,
  collectionId: number,
): Promise<CollectionDetails> => {
  try {
    const collection = await fetcher.get<MovieDBCollectionDetailsResponse>(
      `/collection/${collectionId}`,
    );
    return CollectionMapper.fromMovieDBCollectionToEntity(collection);
  } catch (error) {
    throw new Error(`Cannot get collection by id ${collectionId}: ${error}`);
  }
};
