import Ionicon from 'react-native-vector-icons/Ionicons';
import {View, Image, Pressable, Text, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import type {RootStackParams} from '../../../navigation/MainNavigation';
import type {Media} from '../../../../core/entitites/media.entity';

interface Props {
  firstMovie?: boolean;
  media: Media;
}

export default function CarouselItem({firstMovie, media}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={{...styles.container, marginLeft: firstMovie ? 20 : 0}}>
      <Pressable
        style={({pressed}) => ({
          ...styles.containerPoster,
          opacity: pressed ? 0.85 : 1,
        })}
        onPress={() =>
          navigation.navigate(media.mediaType == 'movie' ? 'MovieDetails' : 'TvSerieDetails', {
            mediaId: media.id,
          })
        }>
        {media.poster ? (
          <Image style={styles.poster} source={{uri: media.poster}} />
        ) : (
          <View style={styles.containerNoPoster}>
            <Ionicon name="sad-outline" style={styles.noPosterIcon} />
            <Text style={styles.noPosterTitle}>Poster Not Found</Text>
          </View>
        )}
      </Pressable>
      <Text style={{...styles.title}} numberOfLines={1}>
        {media.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 140,
    marginRight: 10,
  },
  containerPoster: {
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',

    shadowRadius: 7,
    shadowColor: 'black',
    shadowOpacity: 0.24,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 6,
  },
  poster: {
    flex: 1,
  },
  containerNoPoster: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  noPosterIcon: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 5,
  },
  noPosterTitle: {
    textAlign: 'center',
    fontSize: 18,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'medium',
  },
});
