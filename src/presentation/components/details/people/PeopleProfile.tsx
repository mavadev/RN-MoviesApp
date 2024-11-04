import Ionicon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// 0	Not set / not specified
// 1	Female
// 2	Male
// 3	Non-binary
const genders = [
  {
    icon: 'female-outline',
    color: '#a10822',
  },
  {
    icon: 'male-outline',
    color: '#173da5',
  },
  {
    icon: 'balloon-outline',
    color: '#057727',
  },
];

interface Props {
  avatar: string;
  gender: number;
}

export default function PeopleProfile({avatar, gender}: Props) {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <>
      {/* Backdrop */}
      <View style={styles.backdrop}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({pressed}) => ({
            ...styles.containerButton,
            opacity: pressed ? 0.8 : 1,
            marginTop: top,
          })}>
          <Ionicon name="arrow-back-outline" style={styles.button} />
        </Pressable>
      </View>
      {/* Profile */}
      <View style={styles.container}>
        <View style={styles.containerProfile}>
          <Image source={{uri: avatar}} style={styles.profile} />
          {gender && gender <= genders.length && (
            <View
              style={{
                ...styles.containerGender,
                backgroundColor: genders[gender - 1].color,
              }}>
              <Ionicon name={genders[gender - 1].icon} style={styles.gender} />
            </View>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    height: 200,
    backgroundColor: '#202227',
  },
  containerButton: {
    padding: 20,
    alignSelf: 'flex-start',
  },
  button: {
    color: 'white',
    fontSize: 30,
  },
  container: {
    height: 110,
    marginBottom: 10,
  },
  containerProfile: {
    aspectRatio: 11 / 17,
    height: 200,
    bottom: 90,
    marginHorizontal: 'auto',
    position: 'relative',
  },
  profile: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  containerGender: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    padding: 10,
    borderRadius: 50,
  },
  gender: {
    fontSize: 20,
    color: 'white',
  },
});
