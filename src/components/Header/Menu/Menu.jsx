import React from 'react';
import './menu.sass';

import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setIsPopupVisible } from './../../../redux/actions/mainActions';

export default function Menu() {
  const dispatch = useDispatch();

  function onClickOpenPopup() {
    dispatch(setIsPopupVisible(true));
  }

  return (
    <nav className='header-menu'>
      <NavLink to='/' className='header-menu__item'>
        Главная
      </NavLink>
      <NavLink to='/news' className='header-menu__item'>
        Новости
      </NavLink>
      <button onClick={onClickOpenPopup} className='header-menu__btn'>
        Вход
      </button>
    </nav>
  );
}
