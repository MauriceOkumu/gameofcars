import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/login';
import '../enzyme.config'

describe('Login page', () => {
    it('exists in the directory', () => {
    shallow(<Login />)
    })

})