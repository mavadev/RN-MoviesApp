import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, MovieScreen, SerieScreen, ActorScreen, CollectionScreen} from '../screens';

export type RootStackParams = {
  Content: undefined;
  MovieScreen: {mediaId: number};
  SerieScreen: {mediaId: number};
  ActorScreen: {actorId: number};
  CollectionScreen: {collectionId: number};
};

const Stack = createStackNavigator<RootStackParams>();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Content" component={HomeScreen} />
      <Stack.Screen name="MovieScreen" component={MovieScreen} />
      <Stack.Screen name="SerieScreen" component={SerieScreen} />
      <Stack.Screen name="ActorScreen" component={ActorScreen} />
      <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
    </Stack.Navigator>
  );
}
