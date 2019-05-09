import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../../components/app';
import '../enzyme.config'

describe('Main component page', () => {
    it('exists in the directory', () => {
    shallow(<Welcome />)
    })

})