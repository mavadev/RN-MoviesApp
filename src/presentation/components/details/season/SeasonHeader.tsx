import {StyleSheet, Text, View} from 'react-native';
import {SeasonDetails} from '@entitites/season.entity';
import {HiddenText} from '@components/details';

interface Props {
  name: SeasonDetails['name'];
  seasonNum: SeasonDetails['seasonNumber'];
  description: SeasonDetails['description'];
  cantEpisodes: number;
}

export default function SeasonHeader({name, seasonNum, description, cantEpisodes}: Props) {
  if (!name && !seasonNum && !description) return <></>;

  return (
    <View style={styles.container}>
      <Text style={styles.preTitle}>Temporada {seasonNum}</Text>
      {name != `Temporada ${seasonNum}` && <Text style={styles.title}>{name}</Text>}
      {description && <HiddenText text={description!} />}
      <Text style={styles.titleEpisodes}>Episodios ({cantEpisodes}) :</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    paddingTop: 20,
    paddingHorizontal: 20,
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
  titleEpisodes: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
