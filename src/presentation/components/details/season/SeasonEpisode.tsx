import {Image, StyleSheet, Text, View} from 'react-native';
import type {Episode} from '@entities/season.entity';
import {HiddenText} from '@components/details';

interface Props {
  episode: Episode;
}

export default function SeasonEpisode({episode}: Props) {
  return (
    <>
      <View style={styles.containerEpisode}>
        <Text style={styles.preTitleEpisode}>Episodio {episode.number}</Text>
        <Text style={styles.titleEpisode} textBreakStrategy="balanced">
          {episode.name}
        </Text>
        {episode.description && <HiddenText text={episode.description} />}
      </View>
      {episode.image ? (
        <Image source={{uri: episode.image}} style={styles.imageEpisode} />
      ) : (
        <Text>No tieen imagen</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerEpisode: {
    rowGap: 5,
    paddingBottom: 10,
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
