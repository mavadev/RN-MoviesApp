import {FlatList, Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../../../navigation/MainNavigation';
import {useTvSerie} from '../../../hooks/useTvSerie';
import {Loader} from '../../../components/ui';
import {Carousel} from '../../../components/carousels';
import {MediaHeader, MediaDetails, MediaCaptures, MediaPeople} from '../../../components/details';
import MediaCompanies from '../../../components/details/media/MediaCompanies';
// import {} from '../../../components/tv_serie';

interface Props extends StackScreenProps<RootStackParams, 'TvSerieDetails'> {}

export default function TvSerieScreen({route}: Props) {
  const {mediaId} = route.params;
  const {isLoading, logo, details, captures, cast, similar} = useTvSerie(mediaId);

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
      {/* Creador */}

      {/* HomePage / Estado / Rating */}

      {/* Compañias */}
      <MediaCompanies companies={details?.companies!} />

      {/* Seasons */}
      {/* <Carousel mediaList={details?.seasons!} title="Temporadas" /> */}

      {/* Similares */}
      <Carousel mediaList={similar!} title="Similares" />
    </ScrollView>
  );
}
