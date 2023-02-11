import { SET_PLAN, SET_PLAN_PERIOD } from "./types";

export const setPlan = (plan = "") => {
    return (dispatch) => {
        dispatch({
            type: SET_PLAN,
            payload: plan,
        });
    };
};

export const setPlanPeriod = (planPeriod = true) => {
    return (dispatch) => {
        dispatch({
            type: SET_PLAN_PERIOD,
            payload: planPeriod,
        });
    };
};
