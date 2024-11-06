import {StyleSheet, Text, View} from 'react-native';
import HiddenText from '../HiddenText';

interface Props {
  name?: string;
  biography?: string;
  placeBirth?: string;
}

export default function PeopleDetails({name, biography, placeBirth}: Props) {
  return (
    <>
      {name && (
        <View style={styles.containerTitle}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.placeBirth}>{placeBirth}</Text>
        </View>
      )}
      {biography && (
        <View style={styles.containerBiography}>
          <HiddenText text={biography} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    marginBottom: 20,
    rowGap: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeBirth: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
  containerBiography: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
