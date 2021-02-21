import React, {useState} from 'react';
import Input from '../Input';
import Header from '../Header';

import './catalog.scss'

 const Catalog = () => {

  const [value, setValue] = useState('');

  const handleChange = e => {
    return setValue(e.target.value)
  }
  return (
    <div className='c-catalog'>
      <Header header='Shop'/>
      <Input value={value} onChange={handleChange}/>
    </div>
  )
}

export default Catalog