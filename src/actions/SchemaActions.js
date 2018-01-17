import {
    ADD_SHOPPING_LIST,
    DELETE_SHOPPING_LIST,
    GET_SHOPPING_LIST,
    ADD_FAVOURITES,
    DELETE_FAVOURITES,
    GET_FAVOURITES,
    GET_FAVOURITE_BY_ID,
    CHECK_FAV,
    CHECK_RESET
} from './types';
import {
    addShoppingList,
    deleteIngredients,
    getShoppingLists,
    addFavourites,
    deleteFavourite,
    getAllFavourites,
    getFavouriteById,
    checkItemFavourite } from '../schema/RealmSchema';

export const addIngredients = (id, name, ingredients) => {
   const status = addShoppingList(id, name, ingredients);
   return {
       type: ADD_SHOPPING_LIST,
       payload: status
   };
};

export const getAllShoppingLists = () => {
    return (dispatch) => {
        const list = getShoppingLists();
        dispatch({ type: GET_SHOPPING_LIST, payload: list });
    };
};

export const deleteSelectedIngredients = (indices) => {
    return (dispatch) => {
        const status = deleteIngredients(indices);
        dispatch({ type: DELETE_SHOPPING_LIST, payload: status });
        dispatch({ type: CHECK_RESET });  
    };
};

export const addToFavourites = (item) => {
    return (dispatch) => {
        const status = addFavourites(item);
        dispatch({ type: ADD_FAVOURITES, payload: status });
    };
};

export const deleteFromFavourites = (item) => {
    return (dispatch) => {
        const status = deleteFavourite(item);
        dispatch({ type: DELETE_FAVOURITES, payload: status });
    };
};

export const getFavourite = (id) => {
    return (dispatch) => {
        const item = getFavouriteById(id);
        dispatch({ type: GET_FAVOURITE_BY_ID, payload: item });
    };
};

export const getAllFromFavourites = () => {
    return (dispatch) => {
        const items = getAllFavourites();
        dispatch({ type: GET_FAVOURITES, payload: items });
    };
};

export const checkItemIsFavourite = (id) => {
    return (dispatch) => {
        const status = checkItemFavourite(id);
        dispatch({ type: CHECK_FAV, payload: status });
    };
};
