import {Text, View} from 'react-native';

import {useMovies} from '../../hooks/useMovies';

export default function HomeScreen() {
  const {} = useMovies();

  return (
    <View>
      <Text>Prueba</Text>
    </View>
  );
}
