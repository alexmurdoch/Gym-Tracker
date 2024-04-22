import React, { useEffect, useState } from 'react';
import {  Text , StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const WorkoutCounter = () => {
  const [totalWorkouts, setTotalWorkouts] = useState(0);
  console.log("jere");
  useEffect(() => {
    const fetchWorkouts = async () => {
        const keys = await AsyncStorage.getAllKeys();
        console.log(keys, "<<<");
        const workoutKeys = keys.filter(key => key.startsWith('20')); // assuming workouts are stored with keys starting with the year
        console.log(workoutKeys, "<<");
      setTotalWorkouts(workoutKeys.length);
    };

    fetchWorkouts();
  }, []);

  return (
   
        <Text style={styles.text}>Number of workouts: {totalWorkouts}</Text>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradient: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      backgroundColor: 'transparent',
      color: 'white',
    },
  });

// {exercise.workouts}
// const handleAddExercise = async () => {
//     const date = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
//     const exerciseData = { sets, reps, weight };

//     try {
//       const storedData = await AsyncStorage.getItem(date);
//       const prevExercises = storedData ? JSON.parse(storedData) : {};
//       prevExercises[exercise] = exerciseData;

//       await AsyncStorage.setItem(date, JSON.stringify(prevExercises));
//       setModalVisible(false);
//     } catch (e) {
//       console.error(e);
//     }
//   };  old code not testing today