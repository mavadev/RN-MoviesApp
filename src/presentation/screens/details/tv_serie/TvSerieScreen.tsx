import {ScrollView, StatusBar, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../../../navigation/MainNavigation';
import {Loader} from '../../../components/ui';
import {Carousel} from '../../../components/carousels';
// import {} from '../../../components/tv_serie';

interface Props extends StackScreenProps<RootStackParams, 'TvSerieDetails'> {}

export default function TvSerieScreen({route}: Props) {
  const {mediaId} = route.params;

  return (
    <ScrollView>
      <StatusBar backgroundColor="transparent" />

      <Text>Pantalla de Serie</Text>
      {/* Header */}
      {/* Detalles */}
      {/* Capturas o Backdrops */}
      {/* Actores */}
      {/* Colección */}
      {/* Similares */}
    </ScrollView>
  );
}
