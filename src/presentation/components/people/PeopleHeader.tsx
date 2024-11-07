import {StyleSheet, Text} from 'react-native';

export default function PeopleHeader() {
  return (
    <>
      <Text style={styles.subTitle}>Celebridades</Text>
      <Text style={styles.title}>Populares</Text>
    </>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    paddingTop: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: 'gray',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    paddingBottom: 30,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});
