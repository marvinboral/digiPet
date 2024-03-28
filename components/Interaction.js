/**
 * File:    Interaction.js
 * Author:  Marvin Boral
 * Date:    March 27, 2024
 * Brief:   Inventory Items
 * TODO:    the stuff, for now. placeholder
 */


import React from 'react';
import { View, Text, Pressable } from 'react-native';

const Interaction = () => {
    const onPat = () => {
        // TO Do:Implement patting interaction
    };

    const onFeed = () => {
        // todo: Implement feeding interaction
    };

    return (
        <View>
            <Pressable onPress={onPat}>
                <Text>Pat</Text>
            </Pressable>
            <Pressable onPress={onFeed}>
                <Text>Feed</Text>
            </Pressable>
        </View>
    );
}

export default Interaction;