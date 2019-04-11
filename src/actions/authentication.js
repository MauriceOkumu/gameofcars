import axios from 'axios';
import { GET_ERRORS } from '../constants/action-types';

export const registerUser = (user, history) => dispatch => {
    axios.post('/users/add', user)
    .then(res => history.push('/login'))
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}