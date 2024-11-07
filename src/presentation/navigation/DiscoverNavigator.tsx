import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import PeopleScreen from '../screens/people/PeopleScreen';
import ContentCategories from './ContentCategories';

export type DiscoverNavigatorParams = {
  ContentCategories: undefined;
  PeopleScreen: undefined;
};

const Tab = createMaterialBottomTabNavigator<DiscoverNavigatorParams>();

export default function DiscoverNavigator() {
  return (
    <Tab.Navigator barStyle={{zIndex: 2}}>
      <Tab.Screen name="ContentCategories" component={ContentCategories} />
      <Tab.Screen name="PeopleScreen" component={PeopleScreen} />
    </Tab.Navigator>
  );
}
