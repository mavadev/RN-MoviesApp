import {Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import CarouselHorizontalItem from './CarouselHorizontal-Item';
import type {Media} from '../../../../core/entitites/media.entity';
import type {BaseNavigatorParams} from '../../../navigation/BaseNavigator';

interface Props {
  mediaList: Media[];
}

export default function CarouselHorizontal({mediaList}: Props) {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation<NavigationProp<BaseNavigatorParams>>();

  const handleItemPress = (media: Media) => {
    if (media.mediaType == 'movie') {
      navigation.navigate('MovieScreen', {movieId: media.id});
    } else {
      navigation.navigate('SerieScreen', {serieId: media.id});
    }
  };

  if (!mediaList.length) return <></>;

  return (
    <Carousel
      loop
      autoPlay
      width={width}
      data={mediaList}
      style={styles.carousel}
      scrollAnimationDuration={2000}
      renderItem={({item}) => (
        <CarouselHorizontalItem media={item} onItemPress={() => handleItemPress(item)} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  carousel: {
    aspectRatio: 16 / 9,
    marginHorizontal: 'auto',
  },
});
