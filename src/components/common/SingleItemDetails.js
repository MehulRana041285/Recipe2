import React, { Component } from 'react';
import { View, Image, Text, ToastAndroid, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { 
    addToFavourites, 
    deleteFromFavourites, 
    checkItemIsFavourite 
} from '../../actions';
import { Actions } from 'react-native-router-flux';

class SingleItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    componentDidMount() {
        this.props.checkItemIsFavourite(this.props.item.id);
    }

    onAlert() {
        Alert.alert(
            'Delete item from favourites',
            'Do you want to continue?',
            [
                { text: 'No', onPress: () => {} },
                { text: 'Yes', onPress: () => {
                    this.props.deleteFromFavourites(this.props.item);
                    ToastAndroid.show('Item deleted to favourites', ToastAndroid.SHORT);
                   // Actions.favourites();
                   Actions.refresh({ refresh: { test: Math.random() } });
                } }
            ],
            { cancelable: true }
        );
    }
   
    onCheckChangeListener() {
        const status = this.state.checked || this.props.isFav;
        if (!status) {
            this.props.addToFavourites(this.props.item);
            ToastAndroid.show('Item added to favourites', ToastAndroid.SHORT);
        } else {
            this.onAlert();
        }
        this.setState({
            checked: !this.state.checked
        });
        console.log(this.props.status);
    }

    renderFavouritesButton() {
        console.log(this.props.isFav);
        return (
            <View style={styles.favStyle}>
            <CheckBox
                checked={this.state.checked || this.props.isFav}
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
            return (
                <View>
                    <Image 
                        style={{ width: undefined, height: 250 }}
                        source={{ uri: this.props.item.image }}
                        resizeMode='cover'
                    />
                    <View style={styles.titleStyle}>
                    <Text style={styles.title}>{ this.props.item.name }</Text>
                        {this.renderFavouritesButton()}
                    </View>
                    
                    <View style={styles.table}>
                        <Image
                            style={styles.icon}
                            source={require('../../res/icons/icon_clock.png')}
                            resizeMode='cover'
                        />
                        <Text style={styles.iconText}>{ this.props.item.preparation_time }</Text>
                        <Image
                            style={styles.icon}
                            source={require('../../res/icons/icon_servings.png')}
                            resizeMode="cover"
                        />
                        <Text style={styles.iconText}>{this.props.item.servings}</Text>
                    </View>
                    <Text style={styles.description}>{this.props.item.description}</Text>
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
    addToFavourites,
    deleteFromFavourites,
    checkItemIsFavourite
})(SingleItemDetails);
