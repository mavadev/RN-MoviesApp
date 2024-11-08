import {useEffect, useState} from 'react';
import {movieDBFetcher} from '@adapters/movieDB.adapter';
import type {CollectionDetails} from '@entities/collection.entity';
import {getCollectionByIdUseCase} from '@use-cases/collection/get-collection-by-id.use-case';

export default function useCollection(collectionID: number) {
  const [collection, setCollection] = useState<CollectionDetails>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCollection();
  }, [collectionID]);

  const loadCollection = async () => {
    !isLoading && setIsLoading(true);

    const collectionResponse = await getCollectionByIdUseCase(movieDBFetcher, collectionID);
    setCollection(collectionResponse);

    setIsLoading(false);
  };

  return {
    collection,
    isLoading,
  };
}
