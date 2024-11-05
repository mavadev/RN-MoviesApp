import {useEffect, useState} from 'react';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import type {TvSerieDetails} from '../../core/entitites/tv_serie.entity';
import type {Media, Cast, MediaImage} from '../../core/entitites/media.entity';

import {
  getMediaCreditsUseCase,
  getMediaImagesUseCase,
  getSimilarMediaUseCase,
} from '../../core/use-cases/media';
import {getTvSerieByIdUseCase} from '../../core/use-cases/tv_serie/get-tv-serie-by-id.use-case';

interface Images {
  logo: MediaImage | null;
  captures: MediaImage[];
}

interface SerieState {
  serie: TvSerieDetails;
  cast: Cast[];
  images: Images;
  similar: Media[];
}

export const useSerie = (tvSerieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [serieState, setSerieState] = useState<SerieState>();

  useEffect(() => {
    loadTvSerie();
  }, [tvSerieId]);

  const loadTvSerie = async () => {
    !isLoading && setIsLoading(true);

    const seriePromise = getTvSerieByIdUseCase(movieDBFetcher, tvSerieId);
    const castPromise = getMediaCreditsUseCase(movieDBFetcher, tvSerieId, 'tv');
    const imagesPromise = getMediaImagesUseCase(movieDBFetcher, tvSerieId, 'tv');
    const similarPromise = getSimilarMediaUseCase(movieDBFetcher, tvSerieId, 'tv');

    const [serie, cast, images, similar] = await Promise.all([
      seriePromise,
      castPromise,
      imagesPromise,
      similarPromise,
    ]);

    setSerieState({
      serie,
      images,
      cast,
      similar,
    });
    setIsLoading(false);
  };

  return {
    ...serieState,
    isLoading,
  };
};
