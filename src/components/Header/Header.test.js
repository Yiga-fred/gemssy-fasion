import React from 'react';
import {shallow} from 'enzyme'
import Header from './index';


describe('Header', () => {
  it('renders', () => {
    const component = shallow(<Header/>);
    expect(component.find('li').length).toEqual(2)
  })
})