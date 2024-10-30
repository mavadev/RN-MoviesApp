import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useMovie} from '../../hooks/useMovie';
import type {RootStackParams} from '../../navigation/MainNavigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export default function DetailsScreen({route}: Props) {
  const {movieId} = route.params;
  const {movie, isLoading} = useMovie(movieId);

  if (isLoading) return <Text>Cargando</Text>;

  return (
    <View>
      {/* Header */}
      {/* Detalles */}
      {/* Actores */}
      <Text>{movie?.title}</Text>
    </View>
  );
}
