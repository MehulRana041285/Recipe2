import React, { Component } from 'react';
import { View, Image, Text, Alert, ToastAndroid } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { 
    deleteFromFavourites
} from '../../actions';

class FavouriteItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        };
    }

    onAlert() {
        Alert.alert(
            'Delete item from favourites',
            'Do you want to continue?',
            [
                { text: 'No', onPress: () => {} },
                { text: 'Yes', 
                        onPress: () => {
                            this.props.deleteFromFavourites(this.props.item);
                            ToastAndroid.show('Item deleted from favourites', ToastAndroid.SHORT);
                } }
            ],
            { cancelable: true }
        );
    }

    onCheckChangeListener() {
       this.onAlert();
    }

    renderFavouritesButton() {
        return (
            <View style={styles.favStyle}>
            <CheckBox
                checked={this.state.checked}
                uncheckedIcon='heart-o'
                checkedIcon='heart'
                checkedColor='red'
                containerStyle={{ borderWidth: 0, backgroundColor: 'white' }}
                onPress={this.onCheckChangeListener.bind(this)}
            />
        </View>
        );
    }
    render() {
        console.log(this.props.item);
            const { image, name, preparationTime,
                servings, description } = this.props.item;
            return (
                <View>
                    <Image 
                        style={{ width: undefined, height: 250 }}
                        source={{ uri: image }}
                        resizeMode='cover'
                    />
                    <View style={styles.titleStyle}>
                    <Text style={styles.title}>{ name }</Text>
                        {this.renderFavouritesButton()}
                    </View>
                    
                    <View style={styles.table}>
                        <Image
                            style={styles.icon}
                            source={require('../../res/icons/icon_clock.png')}
                            resizeMode='cover'
                        />
                        <Text style={styles.iconText}>{ preparationTime }</Text>
                        <Image
                            style={styles.icon}
                            source={require('../../res/icons/icon_servings.png')}
                            resizeMode="cover"
                        />
                        <Text style={styles.iconText}>{servings}</Text>
                    </View>
                    <Text style={styles.description}>{description}</Text>
                </View>
            );    
        }
       
}

const styles = {
    title: {
        flex: 0.8,
        fontSize: 20,
        color: '#111111',
        fontFamily: 'Roboto-Regular',
        marginLeft: 10,
        marginTop: 10
      },
    description: {
          fontSize: 16,
          color: '#444444',
          fontFamily: 'Roboto-Light',
          marginLeft: 10,
          marginTop: 5,
          marginRight: 10
      },
    table: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 5,
    },
    icon: {
        height: 15,
        width: 15,
        marginTop: 2,
        marginLeft: 5
      },
    iconText: {
        fontSize: 15,
        fontFamily: 'Roboto-Light',
        marginLeft: 2
      },
    titleStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    favStyle: {
        flex: 0.2,
        backgroundColor: 'white',
        borderWidth: 0,
    }
};

const mapStateToProps = state => {
    return {
        fav: state.schema.favourites,
        status: state.schema.status,
        isFav: state.schema.isFav
    };
};

export default connect(mapStateToProps, {
    deleteFromFavourites,
})(FavouriteItemDetails);
