import {useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {NativeScrollEvent, NativeSyntheticEvent, Text, View} from 'react-native';

import MoviePoster from './MoviePoster';
import type {Movie} from '../../../core/entitites/movie.entity';

interface Props {
  movies: Movie[];
  title?: string;
  loadMovies: (page: number) => void;
}

export default function HorizontalCarousel({movies, title, loadMovies}: Props) {
  const isGettingMovies = useRef(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage != 1) loadMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setTimeout(() => (isGettingMovies.current = false), 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isGettingMovies.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndReached) return;

    // Cargar las demás películas
    setCurrentPage(currentPage + 1);
    isGettingMovies.current = true;
  };

  return (
    <View>
      {title && (
        <Text style={{fontSize: 30, fontWeight: '300', marginLeft: 10, marginBottom: 15}}>
          {title}
        </Text>
      )}

      <FlatList
        horizontal
        data={movies}
        onScroll={onScroll}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => <MoviePoster movie={item} width={140} height={200} />}
      />
    </View>
  );
}
