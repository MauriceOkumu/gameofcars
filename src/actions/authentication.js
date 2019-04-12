import axios from 'axios';
import { GET_ERRORS } from '../constants/action-types';

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
        console.log(res.data);
        history.push('/')
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}