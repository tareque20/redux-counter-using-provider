import { INCREMENT, DECREMENT } from '../constants/types.js';

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

