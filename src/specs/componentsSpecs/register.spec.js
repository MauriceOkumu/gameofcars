import React from 'react';
import { shallow , mount} from 'enzyme';
import Register from '../../components/register';
import '../enzyme.config'

describe('Register component page', () => {
    it('exists in the directory', () => {
        //for provider
    // console.log(mount(<Register />).childAt(0).dive().debug())
      shallow(<Register />)
    })

})