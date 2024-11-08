import {ScrollView, StatusBar} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import type {BaseNavigatorParams} from '@navigation/BaseNavigator';

import {useSerie} from '@hooks/useSerie';
import {Loader} from '@components/ui';
import {CarouselSimple} from '@components/carousels';
import {
  MediaHeader,
  MediaDetails,
  MediaCaptures,
  MediaPeople,
  MediaCompanies,
} from '@components/details';

interface Props extends StackScreenProps<BaseNavigatorParams, 'SerieScreen'> {}

export default function SerieScreen({route}: Props) {
  const {serieId} = route.params;
  const {isLoading, serie, images, cast, similar} = useSerie(serieId);

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
      <CarouselSimple title="Temporadas" mediaList={serie?.seasons!} serieId={serie?.id} />
      {/* Similares */}
      <CarouselSimple title="Similares" mediaList={similar!} />
    </ScrollView>
  );
}
