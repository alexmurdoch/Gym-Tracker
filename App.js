import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/home/HomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import  {ScreenNavigator} from './src/nav/navigation.js';
export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView  style={styles.flex}>
         <NavigationContainer>
      <ScreenNavigator />
    </NavigationContainer>
     </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
