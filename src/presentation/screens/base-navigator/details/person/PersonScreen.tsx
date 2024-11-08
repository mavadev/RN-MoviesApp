import {ScrollView} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BaseNavigatorParams} from '@navigation/BaseNavigator';

import {usePerson} from '@hooks/usePerson';
import {Loader} from '@components/ui';
import {CarouselSimple} from '@components/carousels';
import {PeopleProfile, PeopleDetails} from '@components/details/person';

interface Props extends StackScreenProps<BaseNavigatorParams, 'PersonScreen'> {}

export default function PersonScreen({route}: Props) {
  const {personId} = route.params;
  const {isLoading, person, movies, series} = usePerson(personId);

  if (isLoading || !person) return <Loader />;

  return (
    <ScrollView style={{marginBottom: 20}}>
      {/* Profile */}
      <PeopleProfile avatar={person.avatar} gender={person.gender} />
      {/* Details */}
      <PeopleDetails
        name={person.name}
        biography={person.biography}
        placeBirth={person.placeBirth}
      />
      {/* Credits */}
      <CarouselSimple title="Filmografía Destacada" mediaList={movies!} />
      <CarouselSimple title="Series y Proyectos en TV" mediaList={series!} />
    </ScrollView>
  );
}
