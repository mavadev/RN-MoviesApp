import {ScrollView, StatusBar} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../../../navigation/MainNavigation';
import {useMovie} from '../../../hooks/useMovie';
import {Loader} from '../../../components/ui';
import {Carousel} from '../../../components/carousels';
import {
  MovieHeader,
  MovieDetails,
  MovieActors,
  MovieCollection,
  MovieCaptures,
} from '../../../components/movie';

interface Props extends StackScreenProps<RootStackParams, 'MovieDetails'> {}

export default function MovieScreen({route}: Props) {
  const {mediaId} = route.params;
  const {logo, details, captures, actors, similar, isLoading} = useMovie(mediaId);

  if (isLoading) return <Loader />;

  return (
    <ScrollView>
      <StatusBar backgroundColor="transparent" />
      {/* Header */}
      <MovieHeader backdrop={details?.backdrop!} logo={logo!} />
      {/* Detalles */}
      <MovieDetails
        budget={details?.budget!}
        description={details?.description!}
        genres={details?.genres!}
      />
      {/* Capturas o Backdrops */}
      <MovieCaptures captures={captures!} />
      {/* Actores */}
      <MovieActors actors={actors!} />
      {/* Colección */}
      <MovieCollection collection={details?.collection!} />
      {/* Similares */}
      <Carousel mediaList={similar!} title="Similares" />
    </ScrollView>
  );
}
