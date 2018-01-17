import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

const Button = ({ onPress, style, image }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.container}>
                <Image 
                style={styles.buttonImageStyle}
                source={{ uri: image }}
                />
            </View>
            
        </TouchableOpacity>
    );
};

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7a41ff',
        borderColor: '#7a41ff',
        borderRadius: 50,
        borderWidth: 1,
    },
    
};

export { Button };

