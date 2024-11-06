import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MainNavigator from './MainNavigation';
import PeopleScreen from '../screens/people/PeopleScreen';

const Tab = createMaterialBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainNavigator} />
      <Tab.Screen name="People" component={PeopleScreen} />
    </Tab.Navigator>
  );
}
