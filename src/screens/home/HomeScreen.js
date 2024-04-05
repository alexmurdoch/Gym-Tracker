import React from 'react';
import styled from 'styled-components';
import {LinearGradient} from  'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';
import {Colors} from '../../styles/Colors.js';
import { HomeButton } from '../../reusable/HomeButton.js';
import { menuOptions } from './options.js';


export const HomeScreen = ({navigation}) => {
    return (
        <LinearGradient colors={['#FF416C', '#FF4B2B']} style={styles.container}>
            {menuOptions.map((option, index) => (
                <HomeButton key={index} title={option} navigation={navigation} />
            ))}
        </LinearGradient>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${Colors.secondary}`,
    },
});

