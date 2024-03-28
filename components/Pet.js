/**
 * File:    Pet.js
 * Author:  Marvin Boral
 * Date:    March 27, 2024
 * Brief:   pet interface
 * TODO:    the stuff, for now. placeholder
 */


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
