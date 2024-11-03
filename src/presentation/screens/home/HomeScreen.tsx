import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {HorizontalCarousel, PosterCarousel} from '../../components/movies';
import {useContent, ContentPaths} from '../../hooks/useContent';
import Loader from '../../components/ui/Loader';

export default function HomeScreen() {
  const {top} = useSafeAreaInsets();
  const {isLoading, trending, moviesPopular, seriesPopular, updateContent} = useContent();

  if (isLoading) return <Loader />;

  return (
    <ScrollView>
      <View style={{marginTop: top, paddingVertical: 20, rowGap: 15}}>
        {/* Trending */}
        <PosterCarousel movies={trending!} />

        {/* Películas Populares */}
        <HorizontalCarousel
          movies={moviesPopular}
          title="Películas Populares"
          loadMovies={page => updateContent(ContentPaths.MoviesPopular, page)}
        />

        {/* Series Populares */}
        <HorizontalCarousel
          movies={seriesPopular}
          title="Series Populares"
          loadMovies={page => updateContent(ContentPaths.TvSeriesPopular, page)}
        />
      </View>
    </ScrollView>
  );
}
