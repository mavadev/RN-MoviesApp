import {StyleSheet, Text, View} from 'react-native';

export default function Loader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cargando</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
  },
});
