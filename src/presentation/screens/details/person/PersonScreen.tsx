import {ScrollView} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../../../navigation/MainNavigation';

import {usePerson} from '../../../hooks/usePerson';
import {Loader} from '../../../components/ui';
import {Carousel} from '../../../components/carousels';
import {PeopleProfile, PeopleDetails} from '../../../components/details/person';

interface Props extends StackScreenProps<RootStackParams, 'ActorScreen'> {}

export default function ActorScreen({route}: Props) {
  const {actorId} = route.params;
  const {isLoading, actor, movies, series} = usePerson(actorId);

  if (isLoading || !actor) return <Loader />;

  return (
    <ScrollView style={{marginBottom: 20}}>
      {/* Profile */}
      <PeopleProfile avatar={actor.avatar} gender={actor.gender} />
      {/* Details */}
      <PeopleDetails name={actor.name} biography={actor.biography} placeBirth={actor.placeBirth} />
      {/* Credits */}
      <Carousel title="Filmografía Destacada" mediaList={movies!} />
      <Carousel title="Series y Proyectos en TV" mediaList={series!} />
    </ScrollView>
  );
}
