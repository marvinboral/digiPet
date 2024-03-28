import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import SplashScreenComponent from './screens/SplashScreen';
import Pet from './components/Pet';
import Interaction from './components/Interaction';
import Inventory from './components/Inventory';
import { Audio } from 'expo-av';
import { Entypo } from '@expo/vector-icons';


// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [sound, setSound] = useState(); // State to hold the loaded sound object

    useEffect(() => {
        async function prepare() {
            try {
                // Load fonts and other resources here
                await Font.loadAsync(Entypo.font);
                const { sound } = await Audio.Sound.createAsync(
                    require('./assets/sounds/tralala.wav') // Load the audio file
                );
                setSound(sound);
                await sound.playAsync(); // Start playing the audio
            } catch (e) {
                console.warn(e);
            } finally {
                // Set app readiness to true once resources are loaded
                setAppIsReady(true);
                if (sound) {
                    await sound.unloadAsync(); // Stop playing the audio
                }
                await SplashScreen.hideAsync(); // Hide the splash screen
            }
        }

        prepare();
    }, []);

    const startApp = useCallback(async () => {
        await SplashScreen.hideAsync();
        if (sound) {
            await sound.playAsync(); // Start playing the audio
        }
        setAppIsReady(true);
    }, [sound]);

    if (!appIsReady) {
        return <SplashScreenComponent onAnimationStart={startApp} />;
    }

    return (
        <View style={styles.container}>
            <Pet />
            <Interaction />
            <Inventory />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});