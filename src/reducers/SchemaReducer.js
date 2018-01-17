import {
    ADD_SHOPPING_LIST,
    DELETE_SHOPPING_LIST,
    GET_SHOPPING_LIST,
    ADD_FAVOURITES,
    DELETE_FAVOURITES,
    GET_FAVOURITE_BY_ID,
    GET_FAVOURITES,
    CHECK_FAV
 } from '../actions/types';

const INITIAL_STATE = {
    status: null,
    list: [],
    favourites: [],
    singleFav: {},
    isFav: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SHOPPING_LIST:
            return { ...state, list: action.payload };
        case ADD_SHOPPING_LIST:
            return { ...state, status: action.payload };
        case DELETE_SHOPPING_LIST:
            return { ...state, list: action.payload };
        case ADD_FAVOURITES:
            return { ...state, status: action.payload };
        case DELETE_FAVOURITES:
            return { ...state, status: action.payload };
        case GET_FAVOURITES:
            return { ...state, favourites: action.payload };
        case GET_FAVOURITE_BY_ID:
            return { ...state, singleFav: action.payload };
        case CHECK_FAV:
            return { ...state, isFav: action.payload };
        default:
            return state;
    }
};
