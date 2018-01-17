import {
    CATEGORIES_FETCHED,
    FETCH_ERROR,
    ITEM_LIST_FETCHED,
    FETCH_INIT,
    FETCH_START,
    SINGLE_ITEM_FETCHED,
    CONTENT_FETCHED,
    FETCH_CONTENT_INIT
 } from '../actions/types';

 const INITIAL_STATE = {
        categories: [],
        error: '',
        items: [],
        singleItem: {},
        content: ''
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CATEGORIES_FETCHED:
            return { ...state, categories: action.payload };
        case ITEM_LIST_FETCHED:
            return { ...state, items: action.payload };
        case SINGLE_ITEM_FETCHED:
            return { ...state, singleItem: action.payload };
        case CONTENT_FETCHED:
            return { ...state, content: action.payload };
        case FETCH_CONTENT_INIT:
            return { ...state, content: '' };
        case FETCH_ERROR:
            return { ...state, error: action.payload };
        case FETCH_INIT:
            return { ...state, items: [] };
        case FETCH_START:
            return { ...state, singleItem: {} };
        default:
            return state;
    }
};
