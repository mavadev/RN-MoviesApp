import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface Props {
  background?: boolean;
  position?: 'relative' | 'absolute';
}

export default function ButtonBack({background = false, position = 'absolute'}: Props) {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={({pressed}) => ({
        ...styles.containerButton,
        position,
        marginTop: top,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: background ? 'rgba(0, 0, 0, 0.75)' : 'transparent',
      })}>
      <Ionicon name="arrow-back-outline" style={styles.button} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    top: 0,
    left: 5,
    zIndex: 5,
    padding: 15,
    borderRadius: 50,
  },
  button: {
    color: 'white',
    fontSize: 30,
  },
});
