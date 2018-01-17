import { CHECK_POP, CHECK_PUSH, CHECK_RESET } from '../actions/types';

const INITIAL_STATE = {
    items: []
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case CHECK_PUSH:
            state.items.push(action.payload.itemId);
            return { ...state, items: state.items };
        case CHECK_POP:
            const index = state.items.indexOf(action.payload.itemId);
            console.log(index);
            if (index > -1) {
                state.items.splice(index, 1);
            }
            return { ...state, items: state.items };
        case CHECK_RESET:
            return { ...state, items: [] };
        default:
            return state;
    }
};

