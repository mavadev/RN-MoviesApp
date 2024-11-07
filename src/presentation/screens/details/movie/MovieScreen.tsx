import {ScrollView, StatusBar, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../../../navigation/MainNavigation';

import {useMovie} from '../../../hooks/useMovie';
import {Loader} from '../../../components/ui';
import {CarouselSimple} from '../../../components/carousels';
import {
  MediaHeader,
  MediaDetails,
  MediaCaptures,
  MediaPeople,
  MovieCollection,
  MediaCompanies,
} from '../../../components/details/';

interface Props extends StackScreenProps<RootStackParams, 'MovieScreen'> {}

export default function MovieScreen({route}: Props) {
  const {mediaId} = route.params;
  const {movie, images, cast, similar, isLoading} = useMovie(mediaId);

  if (isLoading) return <Loader />;

  return (
    <ScrollView style={{marginBottom: 20}}>
      <StatusBar backgroundColor="transparent" />
      {/* Header */}
      <MediaHeader backdrop={movie?.backdrop!} logo={images?.logo!} />
      {/* Detalles */}
      <MediaDetails description={movie?.description!} genres={movie?.genres!} />
      {/* Capturas o Backdrops */}
      <MediaCaptures captures={images?.captures!} />
      {/* Actores */}
      <MediaPeople title="Elenco" people={cast!} />
      {/* Productoras */}
      <MediaCompanies companies={movie?.companies!} />
      {/* Colección */}
      <MovieCollection collection={movie?.collection!} />
      {/* Similares */}
      <CarouselSimple mediaList={similar!} title="Similares" />
    </ScrollView>
  );
}
