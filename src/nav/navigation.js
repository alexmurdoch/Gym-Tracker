import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen.js';
import { AddWorkout } from '../screens/addWorkout/AddWorkout.js';
const MyStack  = createStackNavigator();

export const ScreenNavigator = ({navigation}) => {
    return (
        <MyStack.Navigator screenOptions={{ headerShown: false }}>
            <MyStack.Screen name="Home" component={HomeScreen} />
            <MyStack.Screen name="AddWorkout" component={AddWorkout} />
        </MyStack.Navigator>
    );
}
