import {
    initialState,
    SET_EMAIL_ERROR,
    SET_NAME_ERROR,
    SET_PHONE_ERROR,
} from "./types";

export const credsErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME_ERROR:
            return {
                ...state,
                nameError: action.payload,
            };

        case SET_EMAIL_ERROR:
            return {
                ...state,
                emailError: action.payload,
            };

        case SET_PHONE_ERROR:
            return {
                ...state,
                phoneError: action.payload,
            };

        default:
            return state;
    }
};
