import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import personalHomepageReducer from "../features/personalHomepageSlice";
import themeReducer from "../common/themeSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;