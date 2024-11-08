import {useEffect, useState} from 'react';
import {movieDBFetcher} from '@adapters/movieDB.adapter';
import type {SeasonDetails} from '@entitites/season.entity';

import {getSeasonByIdUseCase} from '@use-cases/season';

export default function useSeason(serieId: number, seasonNumber: number) {
  const [isLoading, setIsLoading] = useState(true);
  const [season, setSeason] = useState<SeasonDetails>();

  useEffect(() => {
    loadSeason();
  }, [seasonNumber]);

  const loadSeason = async () => {
    !isLoading && setIsLoading(true);

    const season = await getSeasonByIdUseCase(movieDBFetcher, serieId, seasonNumber);
    setSeason(season);

    setIsLoading(false);
  };

  return {season, isLoading};
}
