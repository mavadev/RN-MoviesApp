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

interface TvSerieState {
  logo: MediaImage | null;
  captures: MediaImage[];
  details: TvSerieDetails;
  cast: Cast[];
  crew: Cast[];
  similar: Media[];
}

export const useTvSerie = (tvSerieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tvSerie, setTvSerie] = useState<TvSerieState>();

  useEffect(() => {
    loadTvSerie();
  }, [tvSerieId]);

  const loadTvSerie = async () => {
    !isLoading && setIsLoading(true);

    const fullTvSeriePromise = getTvSerieByIdUseCase(movieDBFetcher, tvSerieId);
    const castPromise = getMediaCreditsUseCase(movieDBFetcher, tvSerieId, 'tv');
    const imagesPromise = getMediaImagesUseCase(movieDBFetcher, tvSerieId, 'tv');
    const similarSeriePromise = getSimilarMediaUseCase(movieDBFetcher, tvSerieId, 'tv');

    const [tvDetails, credits, images, similarSeries] = await Promise.all([
      fullTvSeriePromise,
      castPromise,
      imagesPromise,
      similarSeriePromise,
    ]);

    setTvSerie({
      logo: images.logo,
      captures: images.captures,
      details: tvDetails,
      cast: credits.cast,
      crew: credits.crew,
      similar: similarSeries,
    });
    setIsLoading(false);
  };

  return {
    ...tvSerie,
    isLoading,
  };
};
