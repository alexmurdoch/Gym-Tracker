import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen.js';
const MyStack  = createStackNavigator();

export const ScreenNavigator = ({navigation}) => {
    return (
        <MyStack.Navigator>
            <MyStack.Screen name="Home" component={HomeScreen} />
        </MyStack.Navigator>
    );
}
