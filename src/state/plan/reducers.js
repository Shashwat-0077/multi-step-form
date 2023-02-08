import { initialState, SET } from "./types";

export const planReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET:
            return action.payload;
        default:
            return state;
    }
};
