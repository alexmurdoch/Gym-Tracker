import React from 'react';
import styled from 'styled-components';
import { View, Text, StyleSheet } from 'react-native';
import {Colors} from '../../styles/Colors.js';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
        <Text>PLACEHOLDERs</Text>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
});

