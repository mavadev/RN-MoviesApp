import {useEffect, useState} from 'react';
import type {PersonDetails} from '../../core/entitites/person.entity';
import type {Media} from '../../core/entitites/media.entity';

import {
  getPeopleByIdUseCase,
  getPeopleMoviesUseCase,
  getPeopleSeriesUseCase,
} from '../../core/use-cases/person';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

interface ActorState {
  actor: PersonDetails;
  movies: Media[];
  series: Media[];
}

export const usePerson = (actorID: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [actorState, setActorState] = useState<ActorState>();

  useEffect(() => {
    loadActor();
  }, [actorID]);

  const loadActor = async () => {
    !isLoading && setIsLoading(true);

    const actorPromise = getPeopleByIdUseCase(movieDBFetcher, actorID);
    const moviesPromise = getPeopleMoviesUseCase(movieDBFetcher, actorID);
    const seriesPromise = getPeopleSeriesUseCase(movieDBFetcher, actorID);

    const [actor, movies, series] = await Promise.all([actorPromise, moviesPromise, seriesPromise]);

    setActorState({actor, movies, series});
    setIsLoading(false);
  };

  return {
    ...actorState,
    isLoading,
  };
};
