import '../gesture-handler.native';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './presentation/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent animated={true} barStyle="light-content" backgroundColor="black" />
      <Navigator />
    </NavigationContainer>
  );
}
