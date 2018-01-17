import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchItemListRemote, fetchStart, navigateToScreen, setNavigationTitle } from '../actions';
import { ItemListCard } from './common';


class ItemListScreen extends Component {
  
    componentWillMount() {
        this.props.fetchStart();
        this.props.fetchItemListRemote(this.props.item.id);
    }
    componentDidMount() {
        const title = this.props.item.name;
        Actions.refresh({ title });
    }
    onItemPressed(item) {
        this.props.navigateToScreen('SingleItem', { item, mode: 'remote' });
    }
    renderRow = ({ item }) => {
        const { name, image, ingredient_count, preparation_time } = item;
        console.log(name, image, ingredient_count, preparation_time, image);
        return (
            <ItemListCard
                item={item}
                onPress={() => this.onItemPressed(item)}
            />
        );
    }
    render() {
        return (
            <FlatList
                data={this.props.items}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.home.items
    };
};

export default connect(mapStateToProps, { 
    fetchItemListRemote,
    fetchStart,
    navigateToScreen,
    setNavigationTitle })(ItemListScreen);
