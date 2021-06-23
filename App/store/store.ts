import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import {todoReducer} from "./slices";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware: [sagaMiddleware]
});


sagaMiddleware.run(function *() {});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
