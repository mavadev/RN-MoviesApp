import {useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View} from 'react-native';

import CarouselItem from './Carousel-Item';
import type {Movie} from '../../../../core/entitites/movie.entity';
import type {TvSerie} from '../../../../core/entitites/tv_serie.entity';

interface Props {
  title?: string;
  mediaList: (Movie | TvSerie)[];
  loadMovies?: (page: number) => void;
}

export default function Carousel({mediaList, title, loadMovies}: Props) {
  const isGettingMovies = useRef(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage != 1 && loadMovies) loadMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setTimeout(() => (isGettingMovies.current = false), 200);
  }, [mediaList]);

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
      {title && <Text style={styles.carouselTitle}>{title}</Text>}

      <FlatList
        horizontal
        data={mediaList}
        onScroll={onScroll}
        style={styles.carousel}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item, index}) => <CarouselItem media={item} firstMovie={index == 0} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselTitle: {
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  carousel: {
    marginBottom: 20,
  },
});
