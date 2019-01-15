import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import logger from "redux-logger";

const configureStore = initialState =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(logger));
    return store;
};

export default configureStore;