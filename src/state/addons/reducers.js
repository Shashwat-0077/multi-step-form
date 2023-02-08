import {
    initialState,
    SET_CUSTOMIZABLE_PROFILE,
    SET_LARGER_STORAGE,
    SET_ONLINE_SERVICE,
} from "./types";

export const addOnReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ONLINE_SERVICE:
            return {
                ...state,
                online_service: action.playload,
            };

        case SET_LARGER_STORAGE:
            return {
                ...state,
                larger_storage: action.playload,
            };

        case SET_CUSTOMIZABLE_PROFILE:
            return {
                ...state,
                cust_profile: action.playload,
            };

        default:
            return state;
    }
};
