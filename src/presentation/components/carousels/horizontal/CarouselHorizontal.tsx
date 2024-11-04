import {Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CarouselHorizontalItem from './CarouselHorizontal-Item';
import type {Movie} from '../../../../core/entitites/movie.entity';
import type {TvSerie} from '../../../../core/entitites/tv_serie.entity';

interface Props {
  mediaList: (Movie | TvSerie)[];
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
