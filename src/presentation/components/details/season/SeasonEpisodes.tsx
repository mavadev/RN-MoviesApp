import {Image, StyleSheet, Text, View} from 'react-native';
import {SeasonDetails} from '../../../../core/entitites/season.entity';
import HiddenText from '../HiddenText';

interface Props {
  episodes: SeasonDetails['episodes'];
}

export default function SeasonEpisodes({episodes}: Props) {
  if (!episodes.length) return <></>;

  return (
    <View style={{rowGap: 15}}>
      <Text style={styles.title}>Episodios ({episodes.length}) :</Text>
      {episodes.map(episode => (
        <View>
          <View style={styles.containerEpisode}>
            <Text style={styles.preTitleEpisode}>Episodio {episode.number}</Text>
            <Text style={styles.titleEpisode} textBreakStrategy="balanced">
              {episode.name}
            </Text>
            {episode.description && <HiddenText text={episode.description} />}
          </View>
          {episode.image && <Image source={{uri: episode.image}} style={styles.imageEpisode} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  containerEpisode: {
    rowGap: 5,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  preTitleEpisode: {
    fontSize: 16,
    color: 'gray',
  },
  titleEpisode: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageEpisode: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});
