import {useCallback, useEffect, useRef, useState} from 'react';
import type {Media} from '../../core/entitites/media.entity';

export default function useCarousel(mediaList: Media[], loadMovies?: (page: number) => void) {
  const isGettingMovies = useRef(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage != 1 && loadMovies) loadMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setTimeout(() => (isGettingMovies.current = false), 200);
  }, [mediaList]);

  const updateContent = useCallback(() => {
    if (!loadMovies || isGettingMovies.current) return;

    setCurrentPage(prevPage => prevPage + 1);
    isGettingMovies.current = true;
  }, []);

  return {
    updateContent,
  };
}
