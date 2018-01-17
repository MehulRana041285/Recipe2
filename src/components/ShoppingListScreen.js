import React, { Component } from 'react';
import { View, FlatList, ScrollView, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { 
    getAllShoppingLists, 
    onCheckBoxChanged, 
    resetCheckedItems, 
    deleteSelectedIngredients } from '../actions';
import { CardSection } from './common';
import IngredientItem from './common/IngredientItem';
import { Actions } from 'react-native-router-flux';


class ShoppingListScreen extends Component {

    componentDidMount() {
        this.props.resetCheckedItems();
        this.props.getAllShoppingLists();
    }
    deleteIngredients(indices) {
        console.log(indices);
        if (indices.length > 0) {
            this.props.deleteSelectedIngredients(indices);
            ToastAndroid.show('Ingredients deleted.', ToastAndroid.SHORT);
            Actions.refresh({ refresh: { test: Math.random() } });
        }
    }
    render() {
       return (
           <View style={styles.container}>
                <ScrollView >
                    <FlatList
                        data={this.props.list} 
                        renderItem={item => {
                            const itemId = item.item.itemId;
                            console.log(item.item.ingredients.length);
                            return (
                                <CardSection
                                    title={item.item.name} 
                                >
                                    <FlatList
                                        data={item.item.ingredients}
                                        keyExtractor={ingredient => ingredient.index}
                                        renderItem={ingredient => {
                                            return (
                                                <IngredientItem
                                                title={ingredient.item.name}
                                                itemId={ingredient.item.id}
                                                uid={itemId}
                                                />
                                            );
                                        }}
                                    />
                                </CardSection>
                            );
                        }}    
                    />
                </ScrollView>
                <FAB 
                    buttonColor="#27ae60" 
                    iconTextColor="#FFFFFF" 
                    onClickAction={() => this.deleteIngredients(this.props.items)} 
                    visible
                    iconTextComponent={<Icon name="delete" />} 
                />
           </View>
       );
    }
}
const styles = {
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
};
const mapStateToProps = state => {
    return {
        list: state.schema.list,
        items: state.checkedItems.items,
    };
};

export default connect(mapStateToProps, { 
    getAllShoppingLists,
    onCheckBoxChanged,
    resetCheckedItems,
    deleteSelectedIngredients })(ShoppingListScreen);
