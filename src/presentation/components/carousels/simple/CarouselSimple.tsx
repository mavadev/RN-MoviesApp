import {FlatList} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import CarouselItem from './Carousel-Item';
import useCarousel from '@hooks/useCarousel';
import type {Media} from '@entities/media.entity';
import type {BaseNavigatorParams} from '@navigation/BaseNavigator';

interface Props {
  mediaList: Media[];
  title?: string;
  serieId?: number;
  loadMovies?: (page: number) => void;
}

export default function CarouselSimple({mediaList, title, loadMovies, serieId}: Props) {
  const {updateContent} = useCarousel(mediaList, loadMovies);
  const navigation = useNavigation<NavigationProp<BaseNavigatorParams>>();

  const handleItemPress = (media: Media, seasonNumber: number) => {
    if (media.mediaType == 'movie') {
      navigation.navigate('MovieScreen', {movieId: media.id});
    } else if (media.mediaType == 'tv') {
      navigation.navigate('SerieScreen', {serieId: media.id});
    } else if (serieId) {
      navigation.navigate('SeasonScreen', {serieId, seasonNumber});
    }
  };

  if (!mediaList.length) return <></>;

  return (
    <View>
      {title && <Text style={styles.carouselTitle}>{title}</Text>}
      <FlatList
        horizontal
        data={mediaList}
        style={styles.carousel}
        onEndReached={updateContent}
        onEndReachedThreshold={0.5}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item: media, index}) => (
          <CarouselItem
            media={media}
            firstMovie={index == 0}
            onItemPress={() => handleItemPress(media, index + 1)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselTitle: {
    fontSize: 22,
    marginLeft: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  carousel: {
    marginBottom: 10,
  },
});
