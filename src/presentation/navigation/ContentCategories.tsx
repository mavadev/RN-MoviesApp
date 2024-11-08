import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TrendingScreen, MoviesScreen, SeriesScreen} from '@screens/content-categories';

export type ContentCategoriesParams = {
  Trending: undefined;
  Movies: undefined;
  Series: undefined;
};

const Tab = createMaterialTopTabNavigator<ContentCategoriesParams>();

export default function ContentCategories() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Trending" component={TrendingScreen} />
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Series" component={SeriesScreen} />
    </Tab.Navigator>
  );
}
