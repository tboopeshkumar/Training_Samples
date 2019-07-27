import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import api from "../middleware/api";
import toastMiddleware from "../middleware/toasts";
import { persistStore } from "redux-persist";

const configureStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(api,toastMiddleware),
          
        ));
   
    const persiststore = persistStore(store);
    return { store , persiststore };
};

export default configureStore;