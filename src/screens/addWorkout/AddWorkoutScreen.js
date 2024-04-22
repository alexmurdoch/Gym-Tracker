import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView , Button} from 'react-native';
import { exerciseOptions } from '../../data/exercises.js';
import { addWorkoutStorage, storeData, getData } from '../../stores/asyncStorage.js';
import {AddExercise} from './AddExercise.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AddWorkoutScreen = ({navigation}) => {
    const retrieveData = async (date) => {
        try {
          const value = await AsyncStorage.getItem(date);
          if (value !== null) {
            // Parse the string back into an object
            const data = JSON.parse(value);
            console.log(data);
          }
        } catch (error) {
          console.error(error);
        }
      };

    retrieveData('2024-04-11');
    console.log(exerciseOptions);

    const [modalVisible, setModalVisible] = useState(false);
    const [currentExercise, setCurrentExercise] = useState(null);
  
    const handlePress = (exercise) => {
        setCurrentExercise(exercise);
        setModalVisible(true);
      };
   



    return (

        
        <View style={styles.container}>
            <TouchableOpacity style={styles.listItem} onPress={() => {
    getData().then(data => {
        console.log(data);
    }
    );
}}>
    <Text style={styles.listItemText}>Get Data</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.listItem} onPress={() => {
    storeData({foo: "asas"});
    console.log("meme");
}
}>
    <Text style={styles.listItemText}>Store Data</Text>
</TouchableOpacity>
          
            <Text style={styles.title}>Add Workout</Text>
            <Text style={styles.text}>Select an exercise to add to your workout:</Text>
            <FlatList
                data={exerciseOptions}
                renderItem={({item}) => (
                    <>
                    <TouchableOpacity onPress={() => handlePress(Object.values(item)[0].name)}>
                      <Text>{Object.values(item)[0].name}</Text>
                    </TouchableOpacity>
                    {modalVisible && <AddExercise exercise={currentExercise} closeModal={() => setModalVisible(false)} />}
                  </>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            {/* <TodaysWorkout /> */}
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