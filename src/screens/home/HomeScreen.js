import React from 'react';
import styled from 'styled-components';
import {LinearGradient} from  'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';
import {Colors} from '../../styles/Colors.js';
import { HomeButton } from '../../reusable/HomeButton.js';
import { menuOptions } from './options.js';
import { WorkoutCounter } from './WorkoutCounter.js';


export const HomeScreen = ({navigation}) => {
    return (
        <LinearGradient colors={['#FF416C', '#FF4B2B']} style={styles.container}>
          <WorkoutCounter />
          {menuOptions.map((option, index) => {
            const key = Object.keys(option)[0];
            const value = option[key];
            return <HomeButton key={index} title={key} navigation={navigation} routeName={value} />;
          })}
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

