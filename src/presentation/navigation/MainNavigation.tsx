import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, MovieScreen, TvSerieScreen} from '../screens';

export type RootStackParams = {
  Content: undefined;
  MovieDetails: {mediaId: number};
  TvSerieDetails: {mediaId: number};
};

const Stack = createStackNavigator<RootStackParams>();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Content" component={HomeScreen} />
      <Stack.Screen name="MovieDetails" component={MovieScreen} />
      <Stack.Screen name="TvSerieDetails" component={TvSerieScreen} />
    </Stack.Navigator>
  );
}
