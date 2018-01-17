import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAllFromFavourites, navigateToScreen } from '../actions';
import { ItemListCard } from './common';

class FavouriteScreen extends Component {

    componentWillMount() {
        this.props.getAllFromFavourites();
    }
   
    onItemPressed(item) {
      this.props.navigateToScreen('FavouriteItem', { item, mode: 'offline' });
    }
    renderRow = ({ item }) => {
        return (
            <ItemListCard
                item={item}
                onPress={() => this.onItemPressed(item)}
            />
        );
    }
    render() {
        const favs = this.props.favourites;
       favs.forEach(fav => {
           console.log(fav);
       });
        return (
            <FlatList
                data={this.props.favourites}
                numColumns={2}
                renderItem={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        favourites: state.schema.favourites
    };
};

export default connect(mapStateToProps, {
    getAllFromFavourites,
    navigateToScreen
})(FavouriteScreen);
