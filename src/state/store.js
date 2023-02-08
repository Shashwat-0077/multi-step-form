import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

// reducers
import { credsReducer } from "./creds/reducer";
import { planReducer } from "./plan/reducers";

const reducers = combineReducers({
    creds: credsReducer,
    plan: planReducer,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
