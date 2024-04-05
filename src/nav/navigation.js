import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen.js';
import { AddWorkoutScreen } from '../screens/addWorkout/AddWorkoutScreen.js';
const MyStack  = createStackNavigator();

export const ScreenNavigator = ({navigation}) => {
    return (
        <MyStack.Navigator screenOptions={{ headerShown: false }}>
            <MyStack.Screen name="Home" component={HomeScreen} />
            <MyStack.Screen name="AddWorkout" component={AddWorkoutScreen} />
            {/* <MyStack.Screen name="Account" component={LoginScreen} /> */}
            { /* rename above screen its supposed to be account screen */}
            
        </MyStack.Navigator>
    );
}
