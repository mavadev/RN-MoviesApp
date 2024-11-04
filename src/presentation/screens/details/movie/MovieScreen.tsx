import {ScrollView, StatusBar, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../../../navigation/MainNavigation';

import {useMovie} from '../../../hooks/useMovie';
import {Loader} from '../../../components/ui';
import {Carousel} from '../../../components/carousels';
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
  const {logo, details, captures, cast, similar, isLoading} = useMovie(mediaId);

  if (isLoading) return <Loader />;

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <StatusBar backgroundColor="transparent" />
      {/* Header */}
      <MediaHeader backdrop={details?.backdrop!} logo={logo!} />
      {/* Detalles */}
      <MediaDetails description={details?.description!} genres={details?.genres!} />
      {/* Capturas o Backdrops */}
      <MediaCaptures captures={captures!} />
      {/* Actores */}
      <MediaPeople title="Elenco" people={cast!} />
      {/* Productoras */}
      <MediaCompanies companies={details?.companies!} />
      {/* Colección */}
      <MovieCollection collection={details?.collection!} />
      {/* Similares */}
      <Carousel mediaList={similar!} title="Similares" />
    </ScrollView>
  );
}
