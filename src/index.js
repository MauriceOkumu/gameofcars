import React from 'react'
import { render }from "react-dom";
import { Provider } from 'react-redux';
import Allroutes from "./routes/routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './reduxStore/store'
import jwt_decode from 'jwt-decode';
import setAuthToken from './authToken/setAuthToken';
import { logoutUser, setCurrentUser } from './actions/authentication'


if(localStorage.jwtToken) {
   setAuthToken(localStorage.jwtToken)
   const decoded = jwt_decode(localStorage.jwtToken);
   store.dispatch(setCurrentUser(decoded));
 }

render((
   <Provider store={store}>
    <Allroutes />
   </Provider>
), document.getElementById("app"));
