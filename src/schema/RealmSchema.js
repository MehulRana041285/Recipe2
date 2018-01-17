import Realm from 'realm';
import { 
    SHOPPING_LIST_SCHEMA,
    FAVOURITES_RECIPE_SCHEMA,
    INGREDIENTS,
    PREPARATIONS,
    FAV_INGREDIENTS,
    SCHEMA_READ_FAILED,
    SCHEMA_READ_SUCCESS,
    SCHEMA_WRITE_FAILED,
    SCHEMA_WRITE_SUCCESS } from './constants';

const ShoppingList = {
    name: SHOPPING_LIST_SCHEMA,
    primaryKey: 'itemId',
    properties: {
        itemId: 'int',
        name: 'string',
        ingredients: 'ingredients[]'
    }
};

const Ingredients = {
    name: INGREDIENTS,
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        amount: 'float?',
        unit: 'int?',
        notes: 'string?'
    }
};

const FavouritesIngredients = {
    name: FAV_INGREDIENTS,
    properties: {
        id: 'int',
        name: 'string',
        amount: 'float?',
        unit: 'int?',
        notes: 'string?'
    }
};

const Preparations = {
    name: PREPARATIONS,
    properties: {
        id: 'int',
        name: 'string'
    }
};

const FavouriteRecipes = {
    name: FAVOURITES_RECIPE_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        description: 'string',
        image: 'string',
        ingredients_count: 'int',
        preparation_time: 'string',
        servings: 'int',
        ingredients: 'favourites_ingredients[]',
        preparations: 'preparations[]'
    }
};

const realm = new Realm({ schema: [ShoppingList,  
                    FavouriteRecipes, Ingredients, Preparations, FavouritesIngredients] });

export const addShoppingList = (itemId, name, ingredients) => {
    //const existingItems = realm.objects(SHOPPING_LIST_SCHEMA).filtered('ingredients = ');   
    realm.write(() => {
            realm.create(SHOPPING_LIST_SCHEMA, {
                itemId,
                name,
                ingredients,
            }, true);     
        });       
};

export const getShoppingLists = () => {
    const list = realm.objects(SHOPPING_LIST_SCHEMA).snapshot();
    return list;
};


const checkForEmptyIngredientsItems = () => {
    const emptyIngredientsItems = realm.objects(SHOPPING_LIST_SCHEMA);
    for (let i = 0; i < emptyIngredientsItems.length; i++) {
        if (emptyIngredientsItems[i].ingredients.length === 0) {
            realm.write(() => {
                realm.delete(emptyIngredientsItems[i]);
            });
        }
    }
};

const deleteIngredient = (id) => {
    const ingredientToDelete = realm.objects(INGREDIENTS).filtered('id = $0', id);
    realm.write(() => {
        realm.delete(ingredientToDelete);
    });
};

export const deleteIngredients = (indices) => {
    indices.forEach(id => {
        deleteIngredient(id);
    });
    checkForEmptyIngredientsItems();
    return realm.objects(SHOPPING_LIST_SCHEMA).snapshot();
};

export const addFavourites = (item) => {
    const { id, name, description, image, preparation_time, 
        ingredients_count, servings, ingredients, preparations } = item;
        console.log(item);
    realm.write(() => {
        realm.create(FAVOURITES_RECIPE_SCHEMA, {
            id,
            name,
            description,
            image,
            preparation_time,
            ingredients_count,
            servings,
            preparations,
            ingredients
        });
    });
};

export const getAllFavourites = () => {
    return realm.objects(FAVOURITES_RECIPE_SCHEMA).snapshot();
};

export const deleteFavourite = (item) => {
    const itemToDelete = realm.objects(FAVOURITES_RECIPE_SCHEMA).filtered('id = $0', item.id);
    realm.write(() => {
        realm.delete(itemToDelete);
    });
};

export const getFavouriteById = (id) => {
    return realm.objects(FAVOURITES_RECIPE_SCHEMA).filtered('id = $0', id).snapshot();
};

export const checkItemFavourite = (id) => {
    const itemToDelete = realm.objects(FAVOURITES_RECIPE_SCHEMA).filtered('id = $0', id);
    if (itemToDelete.length > 0) {
        return true;
    }
    return false;
};

