import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useContent, ContentPaths} from '@hooks/useContent';
import {Loader} from '@components/ui';
import {CarouselSimple, CarouselHorizontal} from '@components/carousels';

export default function TrendingScreen() {
  const {top} = useSafeAreaInsets();
  const {isLoading, trending, moviesPopular, seriesPopular, loadContent} = useContent();

  if (isLoading) return <Loader />;

  return (
    <ScrollView>
      <View style={{marginTop: top, rowGap: 15}}>
        {/* Trending */}
        <CarouselHorizontal mediaList={trending} />

        {/* Películas Populares */}
        <CarouselSimple
          mediaList={moviesPopular}
          title="Películas Populares"
          loadMovies={page => loadContent(ContentPaths.MoviesPopular, page)}
        />

        {/* Series Populares */}
        <CarouselSimple
          mediaList={seriesPopular}
          title="Series Populares"
          loadMovies={page => loadContent(ContentPaths.TvSeriesPopular, page)}
        />
      </View>
    </ScrollView>
  );
}
