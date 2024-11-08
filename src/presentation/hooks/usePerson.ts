import {useEffect, useState} from 'react';
import {movieDBFetcher} from '@adapters/movieDB.adapter';
import type {Media} from '@entities/media.entity';
import type {PersonDetails} from '@entities/person.entity';

import {
  getPeopleByIdUseCase,
  getPeopleMoviesUseCase,
  getPeopleSeriesUseCase,
} from '@use-cases/person';

interface PersonState {
  person: PersonDetails;
  movies: Media[];
  series: Media[];
}

export const usePerson = (personID: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [personState, setPersonState] = useState<PersonState>();

  useEffect(() => {
    loadPerson();
  }, [personID]);

  const loadPerson = async () => {
    !isLoading && setIsLoading(true);

    const personPromise = getPeopleByIdUseCase(movieDBFetcher, personID);
    const moviesPromise = getPeopleMoviesUseCase(movieDBFetcher, personID);
    const seriesPromise = getPeopleSeriesUseCase(movieDBFetcher, personID);

    const [person, movies, series] = await Promise.all([
      personPromise,
      moviesPromise,
      seriesPromise,
    ]);

    setPersonState({person, movies, series});
    setIsLoading(false);
  };

  return {
    ...personState,
    isLoading,
  };
};
