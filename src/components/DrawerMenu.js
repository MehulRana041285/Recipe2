import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { navigateToScreen } from '../actions';
import { Menu } from './common';

class DrawerMenu extends Component {

    renderRow(menu) {
        const { title, icon } = menu.item;

       
        return (
            <Menu 
                title={title} 
                icon={icon} 
                onPress={() => this.onMenuClicked} 
            />
        );
    }

    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.headerView} >
                    <View style={styles.logoView}> 
                        <Image 
                            style={styles.logoImage}
                            source={require('../res/logo.png')}
                        />
                        <Text style={styles.logoText}>Let's Cook</Text>
                    </View>
                </View>
                <View>
                <Menu 
                title="Home" 
                icon="icon_home" 
                onPress={() => this.props.navigateToScreen('Home')} 
                />
            <Menu 
                title="Author" 
                icon="icon_author" 
                onPress={() => this.props.navigateToScreen('Content', 'author')}  
            />
            <Menu 
                title="Favourites"
                icon="icon_favourites" 
                onPress={() => this.props.navigateToScreen('Favourites')} 
            />
            <Menu 
                title="Shopping List"
                icon="icon_shopping" 
                onPress={() => this.props.navigateToScreen('Shopping List')}  
            />
            <Menu 
                title="Terms and Condition"
                icon="icon_terms"
                onPress={() => this.props.navigateToScreen('Content', 'terms-conditions')}  
            />
            <Menu 
                title="Privacy policy"
                icon="icon_privacy"
                onPress={() => this.props.navigateToScreen('Content', 'privacy-policy')}  
            />

            </View>
            </View>
            
        
        );
    }   
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },
    headerView: {
        height: 210,
        backgroundColor: '#b3181c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    logoImage: {
        height: 50,
        width: 50,
       
    },
    logoText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'KaushanScript-Regular',
        marginTop: 6
    }
};

const mapStateToProps = (state) => {
    return {
        menu: state.navigation.menu
    };
};

export default connect(mapStateToProps, { navigateToScreen })(DrawerMenu);
