import {View, Image, Pressable, Text, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import type {RootStackParams} from '../../../navigation/MainNavigation';
import type {Movie} from '../../../../core/entitites/movie.entity';
import type {TvSerie} from '../../../../core/entitites/tv_serie.entity';

interface Props {
  firstMovie?: boolean;
  media: Movie | TvSerie;
}

export default function CarouselItem({firstMovie, media}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={{...styles.container, marginLeft: firstMovie ? 20 : 0}}>
      <Pressable
        style={({pressed}) => ({
          ...styles.containerPoster,
          opacity: pressed ? 0.85 : 1,
        })}
        onPress={() => navigation.navigate('Details', {movieId: media.id})}>
        <Image style={styles.poster} source={{uri: media.poster}} />
      </Pressable>
      <Text style={{...styles.title}} numberOfLines={1}>
        {media.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 5,
  },
  containerPoster: {
    width: 140,
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',

    shadowRadius: 7,
    shadowColor: 'black',
    shadowOpacity: 0.24,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 6,
  },
  poster: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'medium',
  },
});
