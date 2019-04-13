import { SET_CURRENT_USER } from '../constants/action-types';
import isEmpty from '../../backend/validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
          return {
              ...state,
              isAuthenticated: !isEmpty(action.payload),
              user: action.payload
          }  
        default:
          return state;
    }
}

export default authReducer;