import {ScrollView, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {useMovie} from '../../hooks/useMovie';
import {MovieHeader, MovieDetails, MovieActors, MovieCollection} from '../../components/movie';
import type {RootStackParams} from '../../navigation/MainNavigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export default function DetailsScreen({route}: Props) {
  const {movieId} = route.params;
  const {logo, details, actors, isLoading} = useMovie(movieId);

  if (isLoading) return <Text>Cargando</Text>;

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader backdrop={details?.backdrop!} logo={logo!} poster={details?.poster!} />
      {/* Detalles */}
      <MovieDetails
        budget={details?.budget!}
        description={details?.description!}
        genres={details?.genres!}
      />
      {/* Actores */}
      <MovieActors actors={actors!} />
      {/* Colección */}
      <MovieCollection collection={details?.collection!} />
      {/* Similares */}
    </ScrollView>
  );
}
