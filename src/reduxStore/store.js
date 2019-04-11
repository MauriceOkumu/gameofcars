import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({rootReducer}),
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export default store;