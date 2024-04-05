import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { exerciseOptions } from '../../data/exercises.js';
export const AddWorkout = ({navigation}) => {
    console.log(exerciseOptions);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Workout</Text>
            <Text style={styles.text}>Select an exercise to add to your workout:</Text>
            <FlatList
                data={exerciseOptions}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.listItem} onPress={() => {
                        navigation.navigate("AddWorkout", {exercise: item});
                    }}>
                        <Text style={styles.listItemText}>{Object.values(item)[0].name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    listItem: {
        padding: 10,
        margin: 5,
        backgroundColor: '#f9f9f9',
    },
    listItemText: {
        fontSize: 16,
    },
};