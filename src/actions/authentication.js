import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from '../constants/action-types';
import setAuthToken from '../authToken/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    axios.post('http://localhost:5000/users/add', user)
    .then(res => history.push('/login'))
    .catch(err => {
        console.log('Errors-------',err.response.data)
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}

export const loginUser = (user) => dispatch => {
    axios.post('http://localhost:5000/users/login', user)
    .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);

        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded))
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}