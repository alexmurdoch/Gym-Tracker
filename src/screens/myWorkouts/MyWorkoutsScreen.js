import React from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Button } from "react-native";
import { exerciseOptions } from "../../data/exercises.js";


export const MyWorkoutsScreen = ({ navigation }) => {
    const handlePress = (exercise) => {
        console.log(exercise);
    };

    return (
        <View>
            <Text>Add Workout</Text>
            

            <Text>My Saved Workouts</Text>
           
        </View>
    );
};
