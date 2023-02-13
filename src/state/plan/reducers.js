import { initialState, SET_PLAN, SET_PLAN_PERIOD } from "./types";

export const planReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAN:
            return {
                ...state,
                type: action.payload,
            };
        case SET_PLAN_PERIOD:
            return {
                ...state,
                period: action.payload,
            };
        default:
            return state;
    }
};
