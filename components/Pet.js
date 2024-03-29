/**
 * File:    Pet.js
 * Author:  Marvin Boral
 * Date:    March 27, 2024
 * Brief:   Pet interface
 * TODO:    Implement pet interaction logic and state management
 */

import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/petStyles';

const Pet = ({ petState, onInteraction }) => {
    const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());

    // Update last interaction time when petState changes
    useEffect(() => {
        console.log('petState changed:', petState); //log to check the petstate change
        if (petState === 'touched') {
            setLastInteractionTime(Date.now());
        }
    }, [petState]);

    // Check for pet state updates based on interaction time
    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - lastInteractionTime;

            if (elapsedTime >= 20000) { // 20 seconds
                onInteraction('dead');
                clearInterval(interval); // Stop the interval when the pet is dead
            } else if (elapsedTime >= 15000) { // 15 seconds
                onInteraction('sleep');
            } else if (elapsedTime >= 10000) { // 10 seconds
                onInteraction('hungry');
            } else if (elapsedTime >= 5000) { // 5 seconds
                onInteraction('sad');
            }
        }, 1000); // Check every second for simplicity, adjust as needed

        return () => clearInterval(interval);
    }, [lastInteractionTime, onInteraction]);

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
            <TouchableOpacity onPress={() => onInteraction('touched')}>
                <Image source={imageSource} style={styles.petImage} />
            </TouchableOpacity>
            <Text style={styles.statusText}>Pet Status: {petState}</Text>
        </View>
    );
}

export default Pet;
