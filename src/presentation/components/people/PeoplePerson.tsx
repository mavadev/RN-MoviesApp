import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import type {Cast} from '../../../core/entitites/media.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/MainNavigation';

interface Props {
  actor: Cast;
}

export default function CastActor({actor}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={{width: 100, marginHorizontal: 10}}>
      <Pressable onPress={() => navigation.navigate('ActorScreen', {actorId: actor.id})}>
        <Image
          width={100}
          height={100}
          source={{uri: actor.avatar}}
          style={{borderRadius: 5, marginBottom: 10}}
        />
      </Pressable>
      <Text style={{fontSize: 12, color: '#141414'}} numberOfLines={1}>
        {actor.character}
      </Text>
      <Text style={{fontSize: 14}} numberOfLines={1}>
        {actor.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
