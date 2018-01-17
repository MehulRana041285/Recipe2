import {
    NAV_MENU_CLICKED,
    NAVIGATE_TO_ITEMLIST,
    NAVIGATE_TO_MAIN,
    NAVIGATE_TO_SINGLE_ITEM,
    NAVIGATE_TO_CONTENT,
    NAVIGATE_TO_HOME,
    NAVIGATE_TO_SHOPPING_LIST,
    NAVIGATE_TO_FAV,
    NAVIGATE_TO_FAV_ITEM,
    SET_TITLE
} from './types';

export const navigationMenuClicked = (menu) => {
    return {
        type: NAV_MENU_CLICKED,
        payload: menu,
    };
};

export const navigateToScreen = (screen, item) => {
    switch (screen) {
        case 'ItemList':
            return {
                type: NAVIGATE_TO_ITEMLIST,
                payload: item
            };
        case 'Main':
            return {
                type: NAVIGATE_TO_MAIN
            };
        case 'SingleItem':
            return {
                type: NAVIGATE_TO_SINGLE_ITEM,
                payload: { item: item.item, mode: item.mode }
            };
        case 'Content':
            return {
                type: NAVIGATE_TO_CONTENT,
                payload: item
            };
        case 'Home':
            return {
                type: NAVIGATE_TO_HOME
            };
        case 'Shopping List':
            return {
                type: NAVIGATE_TO_SHOPPING_LIST
            };
        case 'Favourites':
            return {
                type: NAVIGATE_TO_FAV
            };
        case 'FavouriteItem':
            return {
                type: NAVIGATE_TO_FAV_ITEM,
                payload: { item: item.item, mode: item.mode }
            };
        default:
            return 0;
    }
};

export const setNavigationTitle = (title) => {
        return {
            type: SET_TITLE,
            payload: { title }
        };
};
