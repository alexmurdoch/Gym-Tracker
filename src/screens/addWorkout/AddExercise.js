import React, { useState } from 'react';
import { Modal, Text, TextInput, Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const  AddExercise = ({ exercise }) =>{
console.log(exercise);
  const [modalVisible, setModalVisible] = useState(false);
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const handleAddExercise = async () => {
    const date = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const exerciseData = { sets, reps, weight };

    try {
      const storedData = await AsyncStorage.getItem(date);
      const prevExercises = storedData ? JSON.parse(storedData) : {};
      prevExercises[exercise] = exerciseData;

      await AsyncStorage.setItem(date, JSON.stringify(prevExercises));
      setModalVisible(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Button title="Add Exercise" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <Text>Add sets, reps, and weight for {exercise}</Text>
        <TextInput placeholder="Sets" onChangeText={setSets} value={sets} />
        <TextInput placeholder="Reps" onChangeText={setReps} value={reps} />
        <TextInput placeholder="Weight" onChangeText={setWeight} value={weight} />
        <Button title="Submit" onPress={handleAddExercise} />
        <Button title="Cancel" onPress={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}