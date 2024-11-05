import {useCallback, useEffect, useRef, useState} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
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

  const onScroll = useCallback(
    () => (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (!loadMovies || isGettingMovies.current) return;

      const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

      const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
      if (!isEndReached) return;

      // Cargar películas
      setCurrentPage(currentPage + 1);
      isGettingMovies.current = true;
    },
    [],
  );

  return {
    onScroll,
  };
}
