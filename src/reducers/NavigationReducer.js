import { Actions } from 'react-native-router-flux';
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
} from '../actions/types';

const INITIAL_STATE = {
    menu: 'Home',
    page: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAV_MENU_CLICKED:
            return { ...state, menu: action.payload };
        case NAVIGATE_TO_ITEMLIST:
            Actions.itemList({ item: action.payload });
            return state;
        case NAVIGATE_TO_MAIN:
            Actions.main();
            return state;
        case NAVIGATE_TO_SINGLE_ITEM:
            Actions.singleItem({ item: action.payload });
            return state;
        case NAVIGATE_TO_CONTENT:
            switch (action.payload) {
                case 'author':
                    Actions.author({ item: action.payload });
                    break;
                case 'terms-conditions':
                    Actions.terms({ item: action.payload });
                    break;
                default:
                    Actions.privacy({ item: action.payload });
            }
            return { ...state, menu: 'content', page: action.payload };
        case NAVIGATE_TO_HOME:
            Actions.home();
            return { ...state, menu: 'Home' };
        case NAVIGATE_TO_SHOPPING_LIST:
            Actions.shoppingList();
            return { ...state, menu: 'Shopping List' };
        case NAVIGATE_TO_FAV:
            Actions.favourites();
            return state;
        case NAVIGATE_TO_FAV_ITEM:
            Actions.favouriteItem({ item: action.payload });
            return state;
        case SET_TITLE:
            Actions.refresh({ title: action.payload });
            return state;
        default:
            return state;
    }
};
