import { createStore, applyMiddleware } from "redux";

import promiseMiddleware from "redux-promise-middleware";
import storeReducer from "./ducks/storeReducer";

const middleware = applyMiddleware(promiseMiddleware);
const store = createStore(storeReducer, middleware);

export default store;
