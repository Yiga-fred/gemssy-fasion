import React from 'react';
import {shallow} from 'enzyme'
import App from './index';


describe('App', () => {
  it('renders', () => {

    const component = shallow(<App />)
    expect(component.exists()).toBeTruthy()
    
  })
})