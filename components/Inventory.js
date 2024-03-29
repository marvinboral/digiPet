/**
 * File:    Inventory.js
 * Author:  Marvin Boral
 * Date:    March 27, 2024
 * Brief:   Should have the inventory for food
 * TODO:    Implement
 */


import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/inventoryStyles.js';

const Inventory = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.button} >Inventory</Text>
            {/* Display inventory items */}
        </View>
    );
}

export default Inventory;