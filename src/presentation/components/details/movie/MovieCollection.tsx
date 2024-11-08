import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import type {BaseNavigatorParams} from '@navigation/BaseNavigator';
import type {Collection} from '@entitites/movie.entity';

interface Props {
  collection: Collection | null;
}

export default function MovieCollection({collection}: Props) {
  const navigation = useNavigation<NavigationProp<BaseNavigatorParams>>();

  if (!collection) return <></>;
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('CollectionScreen', {collectionId: collection.id})}>
      <Image style={styles.backdrop} source={{uri: collection.backdrop}} />
      <View style={styles.contentInfo}>
        <View style={styles.contentPoster}>
          <Image source={{uri: collection.poster}} style={styles.poster} />
        </View>
        <Text style={styles.title}>{collection.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
  },
  backdrop: {
    flex: 1,
    aspectRatio: 16 / 9,
  },
  contentInfo: {
    inset: 0,
    padding: 10,
    columnGap: 15,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(20, 20, 20, 0.75)',
  },
  contentPoster: {flex: 1, alignItems: 'flex-end'},
  poster: {width: 100, aspectRatio: 11 / 17},
  title: {
    flex: 2,
    fontSize: 28,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'whitesmoke',
  },
});
