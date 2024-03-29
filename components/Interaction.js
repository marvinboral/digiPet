/**
 * File:    Interaction.js
 * Author:  Marvin Boral
 * Date:    March 27, 2024
 * Brief:   Interaction component for pet actions
 * TODO:    Implement pet interaction logic and sound effects
 */

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';
import { styles } from '../styles/interactionStyles';

const Interaction = ({ onInteraction }) => {
    const handlePat = () => {
        onInteraction('pat', 'touched');

        // Load and play the touched sound
        const soundObject = new Audio.Sound();
        try {
            soundObject.loadAsync(require('../assets/sounds/huh.wav'))
                .then(() => soundObject.playAsync());
        } catch (error) {
            console.error('Failed to play sound:', error);
        }
    };

    const handleFeed = () => {
        onInteraction('feed', 'normal'); // For simplicity, reset the state to normal after feeding
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePat} style={styles.button}>
                <Text style={styles.buttonText}>Pat</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFeed} style={styles.button}>
                <Text style={styles.buttonText}>Feed</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Interaction;
