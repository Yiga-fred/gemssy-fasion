// @flow
import React from 'react';
import { MdSearch } from "react-icons/md";

import './input.scss'

type Props = {
  onChange: (string) => void,
  value: string
}
 const Input = ({onChange, value}:Props) => {
  return (
    <div className='c-input'>
      <MdSearch/>
      <input value={value} onChange={onChange} type="text"/>
    </div>
  )
}

export default Input