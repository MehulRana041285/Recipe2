import { 
    CATEGORIES,
    ITEM_LIST,
    SINGLE_ITEM,
    CONTENT } from './api';
import { 
    FETCH_ERROR, 
    CATEGORIES_FETCHED,
    ITEM_LIST_FETCHED,
    FETCH_INIT,
    FETCH_START,
    SINGLE_ITEM_FETCHED,
    CONTENT_FETCHED,
    FETCH_CONTENT_INIT } from './types';


export const fetchItemsRemote = () => {
    return (dispatch) => {
        fetch(CATEGORIES)
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                dispatch({ type: CATEGORIES_FETCHED, payload: res.data });
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_ERROR, payload: error });
            });
    };
};

export const fetchItemListRemote = (id) => {
    return (dispatch) => {
        //ITEM_LIST.concat(id)
        fetch(ITEM_LIST.concat(id))
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                dispatch({ type: ITEM_LIST_FETCHED, payload: res.data });
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_ERROR, payload: error });
            });
    };
};

export const fetchSingleItemRemote = (id) => {
    return (dispatch) => {
        fetch(SINGLE_ITEM.concat(id))
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                dispatch({ type: SINGLE_ITEM_FETCHED, payload: res.data });
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_ERROR, payload: error });
            });
    };
};

export const fetchContentRemote = (page) => {
    return (dispatch) => {
        fetch(CONTENT.concat(page))
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                dispatch({ type: CONTENT_FETCHED, payload: res.data.content });
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_ERROR, payload: error });
            });
    };
};

export const fetchStart = () => {
    return {
        type: FETCH_INIT
    };
};

export const fetchSingleItemInit = () => {
    return {
        type: FETCH_START
    };
};

export const fetchContentInit = () => {
    return {
        type: FETCH_CONTENT_INIT
    };
};

