import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CardSection extends Component {
    
    showTitle(text) {
        if (text) {
            return (
                <Text style={styles.titleTextStyle}>
                    {text}
                </Text>  
            );
        }  
    }
    render() {
        const { title, children } = this.props;
        return (
            <View>
               {this.showTitle(title)}
               <View style={styles.contentStyle}>
                   {children}
               </View>
            </View>
        );
    }    
}

const styles = {
    titleTextStyle: {
        fontSize: 17,
        fontFamily: 'Roboto-Medium',
        color: '#000000',
    },
    contentStyle: {
        marginTop: 10,
        marginBottom: 10
    }
};

export { CardSection };
