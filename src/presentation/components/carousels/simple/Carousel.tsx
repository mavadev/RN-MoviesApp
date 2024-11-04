import {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View} from 'react-native';

import CarouselItem from './Carousel-Item';
import type {Media} from '../../../../core/entitites/media.entity';

interface Props {
  title?: string;
  mediaList: Media[];
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

  const onScroll = useCallback(
    () => (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (isGettingMovies.current) return;

      const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

      const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
      if (!isEndReached) return;

      // Cargar las demás películas
      setCurrentPage(currentPage + 1);
      isGettingMovies.current = true;
    },
    [],
  );

  if (!mediaList.length) return <></>;

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
    letterSpacing: 2,
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  carousel: {
    marginBottom: 20,
  },
});
