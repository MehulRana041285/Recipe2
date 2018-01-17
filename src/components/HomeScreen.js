import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchItemsRemote, navigateToScreen } from '../actions';
import { CategoryCard } from './common';


class HomeScreen extends Component {

    componentDidMount() {
       this.props.fetchItemsRemote();
    }

    itemPressed(item) {
        this.props.navigateToScreen('ItemList', item);
      }

     renderRow = ({ item }) => {
         const leftAligned = item.id % 2 === 0;
         return (
            <CategoryCard 
            item={item} 
            onPress={() => this.itemPressed(item)} 
            leftAligned={leftAligned}
            />
         ); 
     };
   

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.categories}
                    keyExtractor={item => item.id}
                    renderItem={this.renderRow}
                />
            </View>
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
};

const mapStateToProps = (state) => {
    return {
        categories: state.home.categories,
        error: state.home.error,
    };
};

export default connect(mapStateToProps, { 
    fetchItemsRemote,
    navigateToScreen })(HomeScreen);

