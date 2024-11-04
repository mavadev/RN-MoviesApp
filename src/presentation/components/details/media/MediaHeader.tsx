import {Image, Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import type {MediaImage} from '../../../../core/entitites/media.entity';

interface Props {
  backdrop: string;
  logo: MediaImage;
}

export default function MovieHeader({backdrop, logo}: Props) {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.backdrop} source={{uri: backdrop}} />
        <LinearGradient
          start={{x: 0.5, y: 0.5}}
          colors={['transparent', 'rgba(0, 0, 0, 0.5)']}
          style={styles.containerAbsolute}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={({pressed}) => ({
              ...styles.containerButton,
              opacity: pressed ? 0.8 : 1,
              marginTop: top,
            })}>
            <Ionicon name="arrow-back-outline" style={styles.button} />
          </Pressable>
        </LinearGradient>
      </View>
      {/* Logo */}
      {logo && (
        <View style={styles.containerLogo}>
          <Image
            source={{uri: logo.url}}
            style={{
              ...styles.logo,
              aspectRatio: logo.asp_ratio,
            }}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  backdrop: {
    aspectRatio: 17 / 11,
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
    height: 30,
    bottom: 70,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    height: 110,
    maxWidth: '80%',
    objectFit: 'contain',
  },
});
