import React from 'react';
import '../enzyme.config';
import { SET_CURRENT_USER } from '../../constants/action-types';
import Authreducer from '../../reducers/authReducer';

describe('Auth reducer', () => {
    it('Returns an object', () => {
     const reducer = Authreducer({},{});
     expect(typeof reducer).toBe('object');
    })
    it('Return a new state when given an action type', () => {
      const newReducer = Authreducer({}, {
          type: SET_CURRENT_USER,
          payload: {name: "Maurice"}
      })

      expect(newReducer.isAuthenticated).toBe(true)
    })
})