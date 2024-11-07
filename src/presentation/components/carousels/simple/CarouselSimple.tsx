import {FlatList} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import type {Media} from '../../../../core/entitites/media.entity';
import useCarousel from '../../../hooks/useCarousel';
import CarouselItem from './Carousel-Item';
import {RootStackParams} from '../../../navigation/MainNavigation';

interface Props {
  mediaList: Media[];
  title?: string;
  serieId?: number;
  loadMovies?: (page: number) => void;
}

export default function CarouselSimple({mediaList, title, loadMovies, serieId}: Props) {
  const {onScroll} = useCarousel(mediaList, loadMovies);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const handleItemPress = (media: Media, seasonNumber: number) => {
    if (media.mediaType == 'movie') {
      navigation.navigate('MovieScreen', {mediaId: media.id});
    } else if (media.mediaType == 'tv') {
      navigation.navigate('SerieScreen', {mediaId: media.id});
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
        onScroll={onScroll}
        style={styles.carousel}
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
