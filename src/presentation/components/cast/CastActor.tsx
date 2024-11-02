import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../../../core/entitites/cast.entity';

interface Props {
  actor: Cast;
}

export default function CastActor({actor}: Props) {
  return (
    <View style={{width: 100, marginHorizontal: 10}}>
      <Image
        width={100}
        height={100}
        source={{uri: actor.avatar}}
        style={{borderRadius: 50, marginBottom: 10}}
      />
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
