import {Image, Pressable, Text, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/MainNavigation';
import type {Movie} from '../../../core/entitites/movie.entity';
import {View} from 'react-native';

interface Props {
  firstMovie?: boolean;
  movie: Movie;
  width?: number;
  height?: number;
}

export default function MoviePoster({firstMovie, movie, width = 280, height = 420}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={{...styles.container, marginLeft: firstMovie ? 20 : 0}}>
      <Pressable
        style={({pressed}) => ({
          ...styles.containerPoster,
          width,
          height,
          opacity: pressed ? 0.85 : 1,
        })}
        onPress={() => navigation.navigate('Details', {movieId: movie.id})}>
        <Image style={styles.poster} source={{uri: movie.poster}} />
      </Pressable>
      <Text style={{...styles.title, width}} numberOfLines={1}>
        {movie.title}
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
