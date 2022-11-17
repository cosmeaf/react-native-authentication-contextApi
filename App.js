import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/Contexts/AuthContex';
import Route from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Route />
      </AuthProvider>
    </NavigationContainer>

  );
}


