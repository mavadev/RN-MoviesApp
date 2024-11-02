import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface Props {
  backdrop: string;
}

export default function MovieHeader({backdrop}: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.backdrop} source={{uri: backdrop}} />
      <LinearGradient
        start={{x: 0.5, y: 0.5}}
        colors={['transparent', 'black']}
        style={styles.containerAbsolute}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({pressed}) => ({...styles.iconButton, opacity: pressed ? 0.8 : 1})}>
          <Ionicon name="arrow-back-outline" style={styles.iconBack} />
        </Pressable>
      </LinearGradient>
    </View>
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
  iconButton: {
    padding: 10,
    margin: 5,
  },
  iconBack: {
    color: 'white',
    fontSize: 30,
  },
});
