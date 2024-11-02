import {ScrollView} from 'react-native-gesture-handler';

import MoviePoster from './MoviePoster';
import type {Movie} from '../../../core/entitites/movie.entity';

interface Props {
  movies: Movie[];
  height?: number;
}

export default function PosterCarousel({movies}: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {movies.map(movie => (
        <MoviePoster key={movie.id} movie={movie} />
      ))}
    </ScrollView>
  );
}
