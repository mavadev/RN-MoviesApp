import '../gesture-handler.native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BaseNavigator from '@navigation/BaseNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <BaseNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
