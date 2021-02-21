import React from 'react';
import {shallow} from 'enzyme'
import Input from './index';


describe('Input', () => {
  it('handles onChange', () => {
    const onChange= jest.fn()
    const component = shallow(<Input onChange={onChange}/>);

    component.find('input').simulate('change', 1);
    expect(onChange).toHaveBeenCalledWith(1)
    
  })
})