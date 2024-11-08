import LinearGradient from 'react-native-linear-gradient';
import {Image, Pressable, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import type {Media} from '@entities/media.entity';
import type {BaseNavigatorParams} from '@navigation/BaseNavigator';

interface Props {
  media: Media;
}

export default function CarouselHorizontalItem({media}: Props) {
  const navigation = useNavigation<NavigationProp<BaseNavigatorParams>>();

  const handleItemPress = (media: Media) => {
    if (media.mediaType == 'movie') {
      navigation.navigate('MovieScreen', {movieId: media.id});
    } else {
      navigation.navigate('SerieScreen', {serieId: media.id});
    }
  };
  return (
    <Pressable style={styles.carouselItem} onPress={() => handleItemPress(media)}>
      <Image source={{uri: media.backdrop!}} style={styles.backdrop} />
      <LinearGradient
        start={{x: 0.5, y: 0.5}}
        colors={['transparent', 'black']}
        style={{
          position: 'absolute',
          inset: 0,
          padding: 20,
          alignItems: 'center',
        }}>
        <Image source={{uri: media.poster!}} style={{height: '100%', aspectRatio: 11 / 17}} />
      </LinearGradient>
    </Pressable>
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
