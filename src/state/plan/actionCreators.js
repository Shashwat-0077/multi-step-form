import { initialState, SET } from "./types";

export const setPlan = (plan = initialState) => {
    return (dispatch) => {
        dispatch({
            type: SET,
            payload: plan,
        });
    };
};
