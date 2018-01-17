import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import HomeReducer from './HomeReducer';
import CheckBoxReducer from './CheckBoxReducer';
import SchemaReducer from './SchemaReducer';

export default combineReducers({
    navigation: NavigationReducer,
    home: HomeReducer,
    checkedItems: CheckBoxReducer,
    schema: SchemaReducer  
});
