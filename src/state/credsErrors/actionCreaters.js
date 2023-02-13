import { SET_EMAIL_ERROR, SET_NAME_ERROR, SET_PHONE_ERROR } from "./types";

export const setNameError = (error) => {
    return (dispatch) => {
        dispatch({
            type: SET_NAME_ERROR,
            payload: error,
        });
    };
};

export const setEmailError = (error) => {
    return (dispatch) => {
        dispatch({
            type: SET_EMAIL_ERROR,
            payload: error,
        });
    };
};

export const setPhoneError = (error) => {
    return (dispatch) => {
        dispatch({
            type: SET_PHONE_ERROR,
            payload: error,
        });
    };
};
