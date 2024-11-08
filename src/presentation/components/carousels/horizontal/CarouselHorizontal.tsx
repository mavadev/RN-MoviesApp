import {Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import CarouselHorizontalItem from './CarouselHorizontal-Item';
import type {Media} from '@entities/media.entity';

interface Props {
  mediaList: Media[];
}

export default function CarouselHorizontal({mediaList}: Props) {
  const {width} = Dimensions.get('window');

  if (!mediaList.length) return <></>;

  return (
    <Carousel
      loop
      autoPlay
      width={width}
      data={mediaList}
      style={styles.carousel}
      scrollAnimationDuration={2000}
      renderItem={({item}) => <CarouselHorizontalItem media={item} />}
    />
  );
}

const styles = StyleSheet.create({
  carousel: {
    aspectRatio: 16 / 9,
    marginHorizontal: 'auto',
  },
});
