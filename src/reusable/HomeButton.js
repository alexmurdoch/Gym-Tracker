import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Colors} from '../styles/Colors.js';
import { menuOptions } from '../screens/home/options.js';
export const HomeButton = ({title, navigation}) => {
    console.log(navigation);
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate("AddWorkout")}>
            <Text style={styles.buttonText}>{title}</Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.dullWhite,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: 50,

        borderColor: 'black', // Neon border
        borderWidth: 2,
        margin: 10, // Space around the button
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24, // Adjust as needed
        textShadowColor: 'black',
     
    }
});
