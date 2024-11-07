import '../gesture-handler.native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './presentation/navigation/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
