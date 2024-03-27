import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/home/HomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import  {ScreenNavigator} from './src/nav/navigation.js';
export default function App() {
  return (
   
         <NavigationContainer>
      <ScreenNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
