import {Image, Pressable, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import type {MovieImage} from '../../../core/entitites/movie.entity';

interface Props {
  backdrop: string;
  logo: MovieImage;
}

export default function MovieHeader({backdrop, logo}: Props) {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.backdrop} source={{uri: backdrop}} />
        <LinearGradient
          start={{x: 0.5, y: 0.5}}
          colors={['transparent', 'black']}
          style={styles.containerAbsolute}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={({pressed}) => ({...styles.containerButton, opacity: pressed ? 0.8 : 1})}>
            <Ionicon name="arrow-back-outline" style={styles.button} />
          </Pressable>
        </LinearGradient>
      </View>
      {/* Logo */}
      <View style={styles.containerLogo}>
        <Image
          source={{uri: logo.url}}
          style={{
            ...styles.logo,
            aspectRatio: logo.asp_ratio,
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  backdrop: {
    aspectRatio: 16 / 9,
  },
  containerAbsolute: {
    position: 'absolute',
    inset: 0,
  },
  containerButton: {
    padding: 10,
    margin: 5,
  },
  button: {
    color: 'white',
    fontSize: 30,
  },
  containerLogo: {
    height: 40,
    bottom: 70,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    height: 110,
  },
});
