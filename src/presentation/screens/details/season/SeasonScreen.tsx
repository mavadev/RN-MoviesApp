import {StackScreenProps} from '@react-navigation/stack';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import type {RootStackParams} from '../../../navigation/MainNavigation';

interface Props extends StackScreenProps<RootStackParams, 'SeasonScreen'> {}

export default function SeasonScreen({route}: Props) {
  const {serieId, mediaId} = route.params;
  // const {} = useSeason(serieId, mediaId);

  return (
    <ScrollView>
      <Text>{serieId}</Text>
      <Text>{mediaId}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
