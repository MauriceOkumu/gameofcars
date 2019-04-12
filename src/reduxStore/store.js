import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import errorReducer from'../reducers/errorReducer';
import thunk from 'redux-thunk';

const initialState = {};
const store = createStore(
    combineReducers({
        rootReducer,
        errors:  errorReducer
       
    }),
    initialState,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export default store;