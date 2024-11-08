import {createStackNavigator} from '@react-navigation/stack';
import DiscoverNavigator from './DiscoverNavigator';
import {
  MovieScreen,
  SerieScreen,
  PersonScreen,
  CollectionScreen,
  SeasonScreen,
} from '@screens/base-navigator';

export type BaseNavigatorParams = {
  DiscoverNavigator: undefined;
  MovieScreen: {movieId: number};
  SerieScreen: {serieId: number};
  SeasonScreen: {serieId: number; seasonNumber: number};

  PersonScreen: {personId: number};
  CollectionScreen: {collectionId: number};
};

const Stack = createStackNavigator<BaseNavigatorParams>();

export default function BaseNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="DiscoverNavigator" component={DiscoverNavigator} />
      <Stack.Screen name="MovieScreen" component={MovieScreen} />
      <Stack.Screen name="SerieScreen" component={SerieScreen} />
      <Stack.Screen name="SeasonScreen" component={SeasonScreen} />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
      <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
    </Stack.Navigator>
  );
}
