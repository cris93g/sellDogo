import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import storeReducer from "./ducks/storeReducer";

const middleware = applyMiddleware(promiseMiddleware);

const combinedReducers = combineReducers({
  storeReducer
});
const store = createStore(combinedReducers, middleware);

export default store;
