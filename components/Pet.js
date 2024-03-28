import React from 'react';
import { View, Text, Image } from 'react-native';

const Pet = () => {
    return (
        <View>
            <Image source={require('../assets/images/pet.png')} />
            <Text>Your pet's status</Text>
        </View>
    );
}

export default Pet;
