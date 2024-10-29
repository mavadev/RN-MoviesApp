import {Text, View} from 'react-native';
import {Movie} from '../../../core/entitites/movie.entity';
import {ScrollView} from 'react-native-gesture-handler';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
}

export default function PosterCarousel({movies, height = 440}: Props) {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
}
