import React from 'react';
import { View, Text } from 'react-native';

const ListItem = ({ content }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{content}</Text>
            <View style={styles.lineStyle} />
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 16,
        color: '#444444',
        fontFamily: 'Roboto-Light'

    },
    lineStyle: {
        height: 1,
        width: null,
        backgroundColor: '#ddd',
        marginTop: 10,
        marginBottom: 10
        
    }
};

export { ListItem };
