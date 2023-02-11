import {
    SET_CUSTOMIZABLE_PROFILE,
    SET_LARGER_STORAGE,
    SET_ONLINE_SERVICE,
} from "./types";

export const setOnlineService = (input = false) => {
    return (dispatch) => {
        dispatch({
            type: SET_ONLINE_SERVICE,
            payload: input,
        });
    };
};

export const setLargerStorage = (input = false) => {
    return (dispatch) => {
        dispatch({
            type: SET_LARGER_STORAGE,
            payload: input,
        });
    };
};

export const setCustProfile = (input = false) => {
    return (dispatch) => {
        dispatch({
            type: SET_CUSTOMIZABLE_PROFILE,
            payload: input,
        });
    };
};
