import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import errorReducer from'../reducers/errorReducer';
import authReducer from '../reducers/authReducer';
import thunk from 'redux-thunk';

const initialState = {};
const store = createStore(
    combineReducers({
        name:rootReducer.name,
        auth: authReducer,
        errors:  errorReducer
       
    }),
    initialState,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export default store;