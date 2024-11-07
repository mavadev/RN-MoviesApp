import {useEffect, useState} from 'react';
import {getPeoplePopularUseCase} from '../../core/use-cases/people/get-people-popular.use-case';
import {PeoplePopular} from '../../core/entitites/people.entity';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const usePeople = (page: number = 1) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [popular, setPopular] = useState<PeoplePopular>({persons: []});

  useEffect(() => {
    page != popular.page && loadPeople();
  }, [page]);

  const loadPeople = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const peoplePopular = await getPeoplePopularUseCase(movieDBFetcher, {page});

      setPopular(prevState => ({
        page: peoplePopular.page,
        persons: [...prevState.persons, ...peoplePopular.persons],
        totalPages: peoplePopular.totalPages,
      }));
    } catch (error) {
      console.error(`Error loading people: ${error}`);
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return {
    ...popular,
    isLoading,
  };
};
