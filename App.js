import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import Pet from './components/Pet';
import Interaction from './components/Interaction';
import Inventory from './components/Inventory';

export default function App() {
    const [splashFinished, setSplashFinished] = useState(false);

    const handleSplashFinish = () => {
        setSplashFinished(true);
    };

    return (
        <View style={styles.container}>
            {!splashFinished && <SplashScreen onFinish={handleSplashFinish} />}
            {splashFinished && (
                <>
                    <Pet />
                    <Interaction />
                    <Inventory />
                 </>
            )}
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