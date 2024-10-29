import {Text, View} from 'react-native';
import {Movie} from '../../../core/entitites/movie.entity';
import {FlatList} from 'react-native-gesture-handler';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
}

export default function HorizontalCarousel({movies, title}: Props) {
  return (
    <View>
      {title && <Text style={{fontSize: 30, fontWeight: '300', marginLeft: 10, marginBottom: 15}}>{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <MoviePoster movie={item} width={140} height={200} />}
      />
    </View>
  );
}
