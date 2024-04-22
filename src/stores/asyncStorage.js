import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store data
export const addWorkoutStorage = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@GymApp:workout', jsonValue)
  } catch (e) {
    // saving error
    }
}




export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@GymApp', jsonValue)
  } catch (e) {
    // saving error
  }
}



// Function to get data
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@GymApp')
    console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

// Usage:


