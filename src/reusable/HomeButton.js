import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../styles/Colors.js';
export const HomeButton = (title) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
});