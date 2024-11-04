import {FlatList, Text, View} from 'react-native';
import CastActor from '../cast/CastActor';
import type {Cast} from '../../../core/entitites/media.entity';

interface Props {
  actors: Cast[];
}

export default function MovieActors({actors}: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        marginBottom: 20,
      }}>
      <View
        style={{
          width: 70,
          position: 'relative',
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            position: 'absolute',
            width: 110,
            left: -22,
            top: 75,
            fontSize: 24,
            color: 'white',
            letterSpacing: 2,
            fontWeight: 'bold',
            transform: [{rotate: '-90deg'}],
          }}>
          Actores
        </Text>
      </View>

      <View style={{flex: 1, paddingVertical: 20, backgroundColor: 'whitesmoke'}}>
        <FlatList
          horizontal
          data={actors}
          keyExtractor={item => `${item.id}`}
          renderItem={({item: actor}) => <CastActor actor={actor} />}
        />
      </View>
    </View>
  );
}
