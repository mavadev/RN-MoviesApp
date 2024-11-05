import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {MediaImage} from '../../../../core/entitites/media.entity';
import {ButtonBack} from '../../ui';

interface Props {
  backdrop: string;
  logo: MediaImage;
}

export default function MovieHeader({backdrop, logo}: Props) {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.backdrop} source={{uri: backdrop}} />
        <LinearGradient
          start={{x: 0.5, y: 0.5}}
          colors={['transparent', 'rgba(0, 0, 0, 0.5)']}
          style={styles.containerAbsolute}>
          <ButtonBack />
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
    inset: 0,
    position: 'absolute',
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
