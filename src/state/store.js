import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

// reducers
import { credsReducer } from "./creds/reducers";
import { planReducer } from "./plan/reducers";
import { addOnReducer } from "./addons/reducers";
import { credsErrorReducer } from "./credsErrors/reducers";

const reducers = combineReducers({
    creds: credsReducer,
    plan: planReducer,
    addOns: addOnReducer,
    credsError: credsErrorReducer,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
