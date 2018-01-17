import { CHECK_POP, CHECK_PUSH, CHECK_RESET } from './types';

export const onCheckBoxChanged = (uid, itemId, trigger) => {
    switch (trigger) {
        case 'push':
            return {
                type: CHECK_PUSH,
                payload: { uid, itemId }
            };
        case 'pop':
            return {
                type: CHECK_POP,
                payload: { uid, itemId }
            };
        default:
            return {
                
            };
    }   
};

export const resetCheckedItems = () => {
    return {
        type: CHECK_RESET,
        payload: {}
    };
};

