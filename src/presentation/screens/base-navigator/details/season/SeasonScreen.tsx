import {StackScreenProps} from '@react-navigation/stack';
import {FlatList, StatusBar, View} from 'react-native';
import type {BaseNavigatorParams} from '@navigation/BaseNavigator';

import useSeason from '@hooks/useSeason';
import {ButtonBack, Loader} from '@components/ui';
import {SeasonHeader, SeasonEpisode} from '@components/details/season';

interface Props extends StackScreenProps<BaseNavigatorParams, 'SeasonScreen'> {}

export default function SeasonScreen({route}: Props) {
  const {serieId, seasonNumber} = route.params;
  const {isLoading, season} = useSeason(serieId, seasonNumber);

  if (isLoading) return <Loader />;

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent={false} backgroundColor="black" />
      <View style={{backgroundColor: 'black'}}>
        <ButtonBack position="relative" />
      </View>
      <FlatList
        data={season?.episodes}
        contentContainerStyle={{rowGap: 15}}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => (
          <SeasonHeader
            name={season?.name!}
            seasonNum={season?.seasonNumber!}
            description={season?.description!}
            cantEpisodes={season?.episodes.length!}
          />
        )}
        renderItem={({item: episode}) => <SeasonEpisode episode={episode} />}
      />
    </View>
  );
}
