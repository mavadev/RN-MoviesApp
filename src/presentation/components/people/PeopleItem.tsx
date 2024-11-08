import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import type {BaseNavigatorParams} from '@navigation/BaseNavigator';
import {Person} from '@entities/people.entity';

interface Props {
  person: Person;
}

export default function PeopleItem({person}: Props) {
  const navigation = useNavigation<NavigationProp<BaseNavigatorParams>>();

  return (
    <View key={person.id} style={{flex: 1}}>
      <Pressable
        style={({pressed}) => ({opacity: pressed ? 0.8 : 1})}
        onPress={() => navigation.navigate('PersonScreen', {personId: person.id})}>
        <Image source={{uri: person.avatar}} style={styles.avatarPerson} />
      </Pressable>
      <Text style={styles.workPerson}>{person.workDepartment}</Text>
      <Text style={styles.namePerson} numberOfLines={1}>
        {person.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarPerson: {
    aspectRatio: 11 / 17,
    borderRadius: 10,
  },
  workPerson: {
    color: 'gray',
    fontSize: 12,
    marginTop: 5,
  },
  namePerson: {
    fontSize: 16,
  },
});
