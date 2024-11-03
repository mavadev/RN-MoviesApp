import {ScrollView, StatusBar} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../../navigation/MainNavigation';
import {useMovie} from '../../hooks/useMovie';
import {
  MovieHeader,
  MovieDetails,
  MovieActors,
  MovieCollection,
  MovieCaptures,
} from '../../components/movie';
import {HorizontalCarousel} from '../../components/movies';
import Loader from '../../components/ui/Loader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export default function DetailsScreen({route}: Props) {
  const {movieId} = route.params;
  const {logo, details, captures, actors, similar, isLoading} = useMovie(movieId);

  if (isLoading) return <Loader />;

  return (
    <ScrollView>
      <StatusBar backgroundColor="transparent" />
      {/* Header */}
      <MovieHeader backdrop={details?.backdrop!} logo={logo!} />
      {/* Detalles */}
      <MovieDetails
        budget={details?.budget!}
        description={details?.description!}
        genres={details?.genres!}
      />
      {/* Capturas o Backdrops */}
      <MovieCaptures captures={captures!} />
      {/* Actores */}
      <MovieActors actors={actors!} />
      {/* Colección */}
      <MovieCollection collection={details?.collection!} />
      {/* Similares */}
      <HorizontalCarousel movies={similar!} title="Similares" />
    </ScrollView>
  );
}
