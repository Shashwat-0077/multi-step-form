import { SET_PLAN, SET_PLAN_PERIOD } from "./types";

export const setPlan = (type = "") => {
    return (dispatch) => {
        dispatch({
            type: SET_PLAN,
            payload: type,
        });
    };
};

export const setPlanPeriod = (period = true) => {
    return (dispatch) => {
        dispatch({
            type: SET_PLAN_PERIOD,
            payload: period,
        });
    };
};
