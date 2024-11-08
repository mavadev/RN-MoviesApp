import {FlatList, Text, View} from 'react-native';
import ActorCard from './ActorCard';
import type {Cast} from '@entities/media.entity';

interface Props {
  title: string;
  people: Cast[];
  position?: 'left' | 'right';
}

export default function MediaPeople({title, people, position = 'left'}: Props) {
  if (!people.length) return <></>;

  return (
    <View
      style={{
        marginBottom: 20,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        flexDirection: position == 'left' ? 'row' : 'row-reverse',
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
          numberOfLines={1}
          style={{
            position: 'absolute',
            width: 180,
            height: 30,
            fontSize: 20,
            color: 'white',
            letterSpacing: 2,
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            transform: [{rotate: position == 'left' ? '-90deg' : '90deg'}],
          }}>
          {title}
        </Text>
      </View>

      <View style={{flex: 1, paddingVertical: 20, backgroundColor: 'whitesmoke'}}>
        <FlatList
          horizontal
          data={people}
          inverted={position == 'right'}
          keyExtractor={item => `${item.id}`}
          renderItem={({item: actor}) => <ActorCard actor={actor} />}
        />
      </View>
    </View>
  );
}
