import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {Movie} from '../../../../core/entitites/movie.entity';
import type {TvSerie} from '../../../../core/entitites/tv_serie.entity';

interface Props {
  media: Movie | TvSerie;
}

export default function CarouselHorizontalItem({media}: Props) {
  return (
    <View style={styles.carouselItem}>
      <Image source={{uri: media.backdrop}} style={styles.backdrop} />
      <LinearGradient
        start={{x: 0.5, y: 0.5}}
        colors={['transparent', 'black']}
        style={{
          position: 'absolute',
          inset: 0,
          padding: 20,
          alignItems: 'center',
        }}>
        <Image source={{uri: media.poster}} style={{height: '100%', aspectRatio: 11 / 17}} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselItem: {
    flex: 1,
    position: 'relative',
  },
  backdrop: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});
