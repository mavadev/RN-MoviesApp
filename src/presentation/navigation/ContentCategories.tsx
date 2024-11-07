import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeScreen} from '../screens';

export type ContentCategoriesParams = {
  Trending: undefined;
  Movies: undefined;
  Series: undefined;
};

const Tab = createMaterialTopTabNavigator<ContentCategoriesParams>();

export default function ContentCategories() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Trending" component={HomeScreen} />
      <Tab.Screen name="Movies" component={HomeScreen} />
      <Tab.Screen name="Series" component={HomeScreen} />
    </Tab.Navigator>
  );
}
