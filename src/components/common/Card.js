import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = {
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 20,
        elevation: 10
    },
};

export { Card };
