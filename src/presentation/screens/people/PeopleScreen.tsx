import {Text, View} from 'react-native';
import {usePeople} from '../../hooks/usePeople';

export default function PeopleScreen() {
  const {} = usePeople();

  return (
    <View>
      <Text>PeopleScreen</Text>
      <Text>PeopleScreen</Text>
      <Text>PeopleScreen</Text>
    </View>
  );
}
