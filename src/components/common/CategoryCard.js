import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

class CategoryCard extends Component {
    render() {
        const { name, image } = this.props.item;
        
        if (this.props.leftAligned) {
            return (
                <TouchableHighlight 
                    onPress={this.props.onPress}
                    underlayColor="white"
                >
                  <View style={styles.card}>
                        <View style={styles.coverLeft}>
                          <Text style={styles.title}>{name}</Text>
                          <Text style={styles.subtitle}>View All</Text>
                        </View>
                        <Image 
                            style={styles.coverRight}
                            source={{ uri: image }} 
                            resizeMode="cover" 
                        />
                        
                  </View>
                </TouchableHighlight>
            );
        } 
            return (
                <TouchableHighlight 
                    onPress={this.props.onPress}
                    underlayColor="white">
                    <View style={styles.card}>
            
                    <Image 
                        style={styles.coverRight}
                        source={{ uri: image }} 
                        resizeMode="cover"
                    />
                    <View style={styles.coverLeft}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>View All</Text>
                    </View>
                
                    </View>
        </TouchableHighlight>
            );   
        }
}

const styles = {
    container: {
        flex: 1,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    card: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        height: 150
      },
      coverLeft: {
        flex: 0.5,
        height: 150,
        width: undefined,
        alignItems: 'center',
        justifyContent: 'center',
      
      },
      coverRight: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        
        
      },
      title: {
        fontSize: 18,
        fontFamily: 'KaushanScript-Regular',
        color: '#222222'
      },
      subtitle: {
        fontSize: 15,
        color: '#68c19f',
        fontFamily: 'Roboto-Light'
      }
};

export { CategoryCard };
