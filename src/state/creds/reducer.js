import { initialState, SET_EMAIL, SET_NAME, SET_PHONE } from "./types";

export const credsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload,
            };

        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };

        case SET_PHONE:
            return {
                ...state,
                phone: action.payload,
            };

        default:
            return state;
    }
};
