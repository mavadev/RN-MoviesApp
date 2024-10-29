import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MainNavigator from './MainNavigation';

const Tab = createMaterialBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainNavigator} />
      <Tab.Screen name="Search" component={MainNavigator} />
    </Tab.Navigator>
  );
}
