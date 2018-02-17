import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { navigateToScreen } from '../actions';

class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigateToScreen('Main');
        }, 3000);
    }

    render() {
        const { backgroundImage, container } = styles;
        return (
            <View style={container}>
                <Image 
                    source={require('../res/nav_header.jpg')}
                    style={backgroundImage}
                    resizeMode="cover"
                />
                <View style={styles.logoView}> 
                <Image 
                    style={styles.logoImage}
                    source={require('../res/logo.png')}
                />
                <Text style={styles.logoText}>Let's Cook</Text>
                </View>
                
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    logoView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
       
    
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'KaushanScript-Regular',
        marginTop: 10
    },
    logoImage: {
        height: 100,
        width: 100
    }
};


export default connect(null, {
    navigateToScreen
})(SplashScreen);
