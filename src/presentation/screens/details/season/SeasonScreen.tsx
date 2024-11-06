import {StackScreenProps} from '@react-navigation/stack';
import {ScrollView, StatusBar, View} from 'react-native';
import type {RootStackParams} from '../../../navigation/MainNavigation';

import useSeason from '../../../hooks/useSeason';
import {ButtonBack, Loader} from '../../../components/ui';
import {SeasonContent, SeasonEpisodes} from '../../../components/details/season';

interface Props extends StackScreenProps<RootStackParams, 'SeasonScreen'> {}

export default function SeasonScreen({route}: Props) {
  const {serieId, seasonNumber} = route.params;
  const {isLoading, season} = useSeason(serieId, seasonNumber);

  if (isLoading) return <Loader />;

  return (
    <ScrollView>
      <StatusBar translucent={false} backgroundColor="black" />
      <View style={{backgroundColor: 'black'}}>
        <ButtonBack position="relative" />
      </View>
      <SeasonContent
        name={season?.name!}
        seasonNum={season?.seasonNumber!}
        description={season?.description!}
      />
      <SeasonEpisodes episodes={season?.episodes!} />
    </ScrollView>
  );
}
