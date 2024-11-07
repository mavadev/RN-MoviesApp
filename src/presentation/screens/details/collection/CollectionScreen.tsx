import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../../../navigation/MainNavigation';

import useCollection from '../../../hooks/useCollection';
import {ButtonBack, Loader} from '../../../components/ui';
import CarouselHorizontalItem from '../../../components/carousels/horizontal/CarouselHorizontal-Item';

interface Props extends StackScreenProps<RootStackParams, 'CollectionScreen'> {}

export default function CollectionScreen({route}: Props) {
  const {collectionId} = route.params;
  const {height: screenHeight} = Dimensions.get('window');
  const {isLoading, collection} = useCollection(collectionId);

  if (isLoading) return <Loader />;

  return (
    <View>
      <ButtonBack background />
      <FlatList
        contentContainerStyle={styles.container}
        keyExtractor={item => item.id.toString()}
        data={collection?.movies}
        renderItem={({item: movie}) => {
          const heightMovie = screenHeight / collection?.movies.length!;
          return (
            <View
              key={movie.id}
              style={{
                ...styles.moviePart,
                maxHeight: screenHeight * 0.5,
                height: heightMovie < 200 ? 200 : heightMovie,
              }}>
              <CarouselHorizontalItem media={movie} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  moviePart: {
    width: '100%',
    marginVertical: 'auto',
  },
});
