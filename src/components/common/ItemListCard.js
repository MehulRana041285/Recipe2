import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class ItemListCard extends Component {

    renderImage(image) {
        if (image !== undefined) {
            return (
                <Image
                    style={styles.cover}
                    source={{ uri: image }}
                    resizeMode='cover'
                />
            );
        }
        return (
            <Image
                style={styles.coverEmpty}
                source={require('../../res/icons/placeholder.png')}
                resizeMode='cover'
            />
        );
        
    }
    
    render() {
        const { image, name, preparation_time, ingredients_count } = this.props.item;
        return (
            <TouchableOpacity 
                style={{ flex: 1 }} 
                onPress={this.props.onPress}
                underlayColor='white'
            >
            <View style={styles.card} >
                {this.renderImage(image)}
                <Text style={styles.name} numberOfLines={2}>{name}</Text>
                <View style={styles.addOn}>
                    <View style={styles.leftAligned}>
                        <Image
                            style={styles.icon}
                            source={require('../../res/icons/icon_clock.png')}
                        />
                        <Text style={styles.iconText}>{preparation_time} Min</Text>
                    </View>
                    <View style={styles.rightAligned}>
                        <Image
                            style={styles.icon}
                            source={require('../../res/icons/icon_ingredients.png')}
                        />
                        <Text style={styles.iconText}>{ingredients_count} Ingredients</Text>
                    </View>
              </View>
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    actionBar: {
      backgroundColor: '#b3181c',
      color: '#000000',
      paddingHorizontal: 10
    },
    container: {
      backgroundColor: '#dadada',
      paddingLeft: 5,
      paddingRight: 5
    },
    card: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 225,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5
      },
      cover: {
        flex: 0.6
      },
      coverEmpty: {
        flex: 0.6,
        width: null
      },
      name: {
        flex: 0.25,
        fontSize: 18,
        color: '#444444',
        fontFamily: 'Roboto-Regular',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10
      },
      addOn: {
        flex: 0.15,
        display: 'flex',
        flexDirection: 'row'
      },
      leftAligned: {
         flex: 0.3,
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'center',
         paddingLeft: 10
      },
      rightAligned: {
        flex: 0.7,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
        
      },
      icon: {
        height: 15,
        width: 15,
        marginTop: 2
      },
      iconText: {
        fontSize: 12,
        fontFamily: 'Roboto-Light',
        marginLeft: 5
      }
  };

export { ItemListCard };
