import {Image, Pressable, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/MainNavigation';
import type {Movie} from '../../../core/entitites/movie.entity';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

export default function MoviePoster({movie, width = 280, height = 420}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.container,
        width,
        height,
        opacity: pressed ? 0.85 : 1,
      })}
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}>
      <Image style={{flex: 1}} source={{uri: movie.poster}} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
    marginHorizontal: 10,

    shadowRadius: 7,
    shadowColor: 'black',
    shadowOpacity: 0.24,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 6,

    marginBottom: 15,
  },
  image: {
    flex: 1,
  },
});
