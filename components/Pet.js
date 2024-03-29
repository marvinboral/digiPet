/**
 * File:    Pet.js
 * Author:  Marvin Boral
 * Date:    March 27, 2024
 * Brief:   Pet interface
 * TODO:    Implement pet interaction logic and state management
 */

import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { styles } from '../styles/petStyles';

const Pet = ({ petState, onInteraction }) => {
    const [lastInteractionTime, setLastInteractionTime] = useState(new Date());

    useEffect(() => {
        const interactionInterval = setInterval(() => {
            const currentTime = new Date();
            const elapsedTime = currentTime - lastInteractionTime;

            if (elapsedTime >= 500000) { // 8 minutes and 20 seconds
                onInteraction('dead');
            } else if (elapsedTime >= 300000) { // 5 minutes
                onInteraction('hungry');
            }
        }, 1000); // Check every second for simplicity, adjust as needed

        return () => clearInterval(interactionInterval);
    }, [lastInteractionTime, onInteraction]);

    useEffect(() => {
        if (petState === 'touched') {
            const timeout = setTimeout(() => {
                onInteraction('pat', 'normal');
            }, 2000); // 2 seconds
            return () => clearTimeout(timeout);
        }
    }, [petState, onInteraction]);

    // Map petState to corresponding image
    let imageSource;
    switch (petState) {
        case 'normal':
            imageSource = require('../assets/images/pet.png');
            break;
        case 'touched':
            imageSource = require('../assets/images/touched.png');
            break;
        case 'sad':
            imageSource = require('../assets/images/sad.png');
            break;
        case 'sleep':
            imageSource = require('../assets/images/sleep.png');
            break;
        case 'hungry':
            imageSource = require('../assets/images/hungry.png');
            break;
        case 'dead':
            imageSource = require('../assets/images/dead.png');
            break;
        default:
            imageSource = require('../assets/images/pet.png');
            break;
    }

    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.petImage} />
            <Text style={styles.statusText}>Pet Status: {petState}</Text>
        </View>
    );
}

export default Pet;
