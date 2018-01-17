import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import { 
    onCheckBoxChanged,
    resetCheckedItems,
    addIngredients,
    getFavourite,
    setNavigationTitle } from '../actions';
import { 
    Card, 
    CardSection, 
    ListItem, 
     } from './common';
import IngredientItem from './common/IngredientItem';
import FavouriteItemDetails from './common/FavouriteItemDetails';


class FavouriteItemScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        };
    }
    componentWillMount() {
        this.props.resetCheckedItems();
        //this.props.getFavourite(this.props.item.item.id);
    }
    componentDidMount() {
        const title = this.props.item.item.name;
        Actions.refresh({ title });
    }
   
    saveIngredients(indices) {
        const { id, name, ingredients } = this.props.item.item;
        const selectedIngredients = ingredients.filter(ingredient => 
            indices.indexOf(ingredient.id) > -1);
        this.props.addIngredients(id, name, selectedIngredients);
    } 

    renderIngredientList(ingredients) {
            return (
                <CardSection
                    title="Ingredients" 
                >
                    <FlatList
                        data={ingredients}
                        keyExtractor={item => item.id}
                        renderItem={this.renderIngredients}
                    />
                </CardSection>
            );
    }
    
    renderIngredients = ({ item }) => {
        return (
            <IngredientItem
                title={item.name}
                itemId={item.id}
                uid={this.props.item.id}
            />
        );
    }

    renderPreparationsList(preparations) {
            return (
                <CardSection
                    title="Preparations"
                >
                    <FlatList
                        data={preparations}
                        keyExtractor={item => item.id}
                        renderItem={this.renderPreparations}
                    />
                </CardSection>
            );   
    }

    renderPreparations = ({ item }) => {
        return (
            <ListItem
                content={item.name}
            />
        );
    }

    renderActionButton = () => {
        if (this.props.items) {
            return (
                <ActionButton 
                onPress={() => this.saveIngredients(this.props.items)}
                bgColor="#ff0000"
                buttonColor="rgba(76,175,80,1)"
                />
            );
        }
    }

    renderContent() {
        console.log(this.props.singleFav.name);
        return (
                <View style={styles.container}>
                <ScrollView>
                    <FavouriteItemDetails
                        item={this.props.item.item}
                        mode={this.props.item.mode}
                    />
                    <Card>
                        {this.renderIngredientList(this.props.item.item.ingredients)}
                    </Card>
                    <Card>
                       {this.renderPreparationsList(this.props.item.item.preparations)}
                    </Card>
                    
                </ScrollView>
            </View>
            );
        } 
         
    render() {
        return this.renderContent();
    }
}

const styles = {
    container: { 
    flex: 1,
      backgroundColor: 'white',
      position: 'relative'
    },
    ingredientsText: {
          fontSize: 16,
          fontFamily: 'Roboto-Light',
          marginTop: 2,
          color: '#222222'
    },
    buttonStyle: {
        flex: 1,
        position: 'absolute',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    }
  };

const mapStateToProps = state => {
    return {
        singleItem: state.home.singleItem,
        items: state.checkedItems.items,
        list: state.schema.list,
        status: state.schema.status,
        singleFav: state.schema.singleFav
    };
};


export default connect(mapStateToProps, {
    onCheckBoxChanged,
    resetCheckedItems,
    addIngredients,
    getFavourite,
    setNavigationTitle
})(FavouriteItemScreen);
