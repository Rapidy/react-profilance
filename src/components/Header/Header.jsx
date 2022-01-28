import React from 'react';
import './header.sass';

import logo from '../../img/logo.svg';

import Menu from './Menu/Menu';
import Popup from './Popup/Popup';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__icon'>
        <img src={logo} alt='Логотип Profilance Group' />
      </div>

      <Menu />
      <Popup />
    </header>
  );
}
