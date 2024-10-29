import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useMovies} from '../../hooks/useMovies';
import {HorizontalCarousel, PosterCarousel} from '../../components/';
import {MovieList} from '../../../core/constants/movieList.enum';

export default function HomeScreen() {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upComing, updateMovies} = useMovies();

  if (isLoading) return <Text>Cargando</Text>;

  return (
    <ScrollView>
      <View style={{marginTop: top, paddingVertical: 20, rowGap: 15}}>
        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* Populares */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadMovies={page => updateMovies(MovieList.Popular, page)}
        />

        {/* Top Rated */}
        <HorizontalCarousel
          movies={topRated}
          title="Mejor Valorados"
          loadMovies={page => updateMovies(MovieList.TopRated, page)}
        />

        {/* Up Coming */}
        <HorizontalCarousel
          movies={upComing}
          title="Próximos Estrenos"
          loadMovies={page => updateMovies(MovieList.Upcoming, page)}
        />
      </View>
    </ScrollView>
  );
}
