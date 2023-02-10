import {createStore, applyMiddleware} from 'redux'

import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index';
import {rootSaga} from './saga/index';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

sagaMiddleware.run(rootSaga);


