import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/MainNavigation';
import type {Cast} from '../../../../core/entitites/media.entity';

interface Props {
  actor: Cast;
}

export default function ActorCard({actor}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={{width: 100, marginHorizontal: 10}}>
      <Pressable onPress={() => navigation.navigate('PersonScreen', {personId: actor.id})}>
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
