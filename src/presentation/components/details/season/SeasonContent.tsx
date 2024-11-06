import {StyleSheet, Text, View} from 'react-native';
import {SeasonDetails} from '../../../../core/entitites/season.entity';
import HiddenText from '../HiddenText';

interface Props {
  name: SeasonDetails['name'];
  seasonNum: SeasonDetails['seasonNumber'];
  description: SeasonDetails['description'];
}

export default function SeasonContent({name, seasonNum, description}: Props) {
  if (!name && !seasonNum && !description) return <></>;

  return (
    <View style={styles.container}>
      <Text style={styles.preTitle}>Temporada {seasonNum}</Text>
      <Text style={styles.title}>{name}</Text>
      {description && <HiddenText text={description!} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    rowGap: 10,
  },
  preTitle: {
    fontSize: 20,
    color: 'gray',
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
});
