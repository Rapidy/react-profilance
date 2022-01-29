import React from 'react';
import './menu.sass';

import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setIsPopupVisible, setLogOut } from './../../../redux/actions/mainActions';

export default function Menu() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth);

  function onClickOpenPopup() {
    dispatch(setIsPopupVisible(true));
  }

  function onClickLogOut() {
    dispatch(setLogOut());
  }

  return (
    <nav className='header-menu'>
      <NavLink to='/' className='header-menu__item'>
        Главная
      </NavLink>
      <NavLink to='/news' className='header-menu__item'>
        Новости
      </NavLink>
      {!isAuth ? (
        <button onClick={onClickOpenPopup} className='header-menu__btn'>
          Вход
        </button>
      ) : (
        <button onClick={onClickLogOut} className='header-menu__btn'>
          Выход
        </button>
      )}
    </nav>
  );
}
