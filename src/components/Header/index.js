// @flow
import React from 'react';
import {
  Link
} from "react-router-dom";
import './header.scss'


 const Header = () => {
  return (
    <header className='c-header'>
      <nav>
      <Link to='/'><h1>Gemssy</h1></Link>
        <ul>
          <li><Link to='/'>Shop</Link></li>
          <li><Link to='/favorites'>Favourites</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header