import React from 'react';
import '../enzyme.config';
import { GET_ERRORS } from '../../constants/action-types';
import errorReducer from '../../reducers/errorReducer';

describe('Auth reducer', () => {
    it('Returns an object', () => {
     const reducer = errorReducer({},{});
     expect(typeof reducer).toBe('object');
    })
    it('Return an empty object when there are no errors', () => {
        const errors = errorReducer({}, {
            type: GET_ERRORS,
            payload: {}
        })
        expect(Object.keys(errors).length).toBe(0)
      })
})