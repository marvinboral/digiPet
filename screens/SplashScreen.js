/**
 * File:    SplashScreen.js
 * Author:  Marvin Boral
 * Date:    March 27, 2024
 * Brief:   Handles the splash screen
 * TODO:    
 */

import React, { useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const SplashScreen = ({ onAnimationStart }) => {
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 10000,
                useNativeDriver: true,
            }
        ).start(() => {
            onAnimationStart();
        });
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../assets/images/splash.png')}
                style={{
                    opacity: fadeAnim,
                    width: '100%',
                    height: '100%',
                }}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});

export default SplashScreen;