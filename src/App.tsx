import '../gesture-handler.native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './presentation/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
