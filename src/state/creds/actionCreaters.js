import { SET_EMAIL, SET_NAME, SET_PHONE } from "./types";

export const setName = (name) => {
    return (dispatch) => {
        dispatch({
            type: SET_NAME,
            payload: name,
        });
    };
};

export const setEmail = (email) => {
    return (dispatch) => {
        dispatch({
            type: SET_EMAIL,
            payload: email,
        });
    };
};

export const setPhone = (phone) => {
    return (dispatch) => {
        dispatch({
            type: SET_PHONE,
            payload: phone,
        });
    };
};
