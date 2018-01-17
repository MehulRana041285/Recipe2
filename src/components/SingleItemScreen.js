import React, { Component } from 'react';
import { ScrollView, View, FlatList, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import { 
    fetchSingleItemRemote, 
    fetchSingleItemInit, 
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
import SingleItemDetails from './common/SingleItemDetails';


class SingleItemScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }
    componentWillMount() {
        this.props.resetCheckedItems();
        if (this.props.item.mode === 'remote') {
            this.fetchItemRemotely(); 
        } else {
            this.props.getFavourite(this.props.item.item.id);
        }
    }
    componentDidMount() {
        const title = this.props.item.item.name;
        Actions.refresh({ title });
    }
   
    fetchItemRemotely() {
        this.props.fetchSingleItemInit();
        this.props.fetchSingleItemRemote(this.props.item.item.id);
    }

    saveIngredients(indices) {
        const { id, name, ingredients } = this.props.singleItem;
        const selectedIngredients = ingredients.filter(ingredient => 
            indices.indexOf(ingredient.id) > -1);
        this.props.addIngredients(id, name, selectedIngredients);
        ToastAndroid.show('Ingredients added to shopping list', ToastAndroid.SHORT);
        Actions.refresh({ refresh: { test: Math.random() } });  
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
        if (this.props.item.mode === 'remote' && this.props.singleItem.ingredients) {
            return (
                <View style={styles.container}>
                <ScrollView>
                    <SingleItemDetails
                        item={this.props.singleItem}
                        mode={this.props.item.mode}
                    />
                    <Card>
                       {this.renderIngredientList(this.props.singleItem.ingredients)}
                    </Card>
                    <Card>
                       {this.renderPreparationsList(this.props.singleItem.preparations)}
                    </Card>
                    
                </ScrollView>
                    {this.renderActionButton()}
            </View>
            );
        } 
        return <View />;   
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
    fetchSingleItemRemote,
    fetchSingleItemInit,
    onCheckBoxChanged,
    resetCheckedItems,
    addIngredients,
    getFavourite,
    setNavigationTitle
})(SingleItemScreen);
