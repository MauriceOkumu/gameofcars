import React from 'react';
import { shallow } from 'enzyme';
import Register from '../../components/register';
import '../enzyme.config'

describe('Register component page', () => {
    it('exists in the directory', () => {
    shallow(<Register />)
    })

})