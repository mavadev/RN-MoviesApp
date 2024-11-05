import {ScrollView, StatusBar} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../../../navigation/MainNavigation';

import {useSerie} from '../../../hooks/useSerie';
import {Loader} from '../../../components/ui';
import {Carousel} from '../../../components/carousels';
import {
  MediaHeader,
  MediaDetails,
  MediaCaptures,
  MediaPeople,
  MediaCompanies,
} from '../../../components/details';

interface Props extends StackScreenProps<RootStackParams, 'SerieScreen'> {}

export default function SerieScreen({route}: Props) {
  const {mediaId} = route.params;
  const {isLoading, serie, images, cast, similar} = useSerie(mediaId);

  if (isLoading) return <Loader />;

  return (
    <ScrollView style={{marginBottom: 20}}>
      <StatusBar backgroundColor="transparent" />
      {/* Header */}
      <MediaHeader backdrop={serie?.backdrop!} logo={images?.logo!} />
      {/* Detalles */}
      <MediaDetails description={serie?.description!} genres={serie?.genres!} />
      {/* Capturas o Backdrops */}
      <MediaCaptures captures={images?.captures!} />
      {/* Actores */}
      <MediaPeople title="Elenco" people={cast!} />
      {/* Compañias */}
      <MediaCompanies companies={serie?.companies!} />
      {/* Seasons */}
      <Carousel title="Temporadas" mediaList={serie?.seasons!} serieId={serie?.id} />
      {/* Similares */}
      <Carousel title="Similares" mediaList={similar!} />
    </ScrollView>
  );
}
