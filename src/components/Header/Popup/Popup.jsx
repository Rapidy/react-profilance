import React from 'react';
import './popup.sass';
import { useSelector, useDispatch } from 'react-redux';
import { setIsPopupVisible } from './../../../redux/actions/mainActions';

export default function Popup() {
  const isPopupVisible = useSelector((state) => state.isPopupVisible);
  const dispatch = useDispatch();

  function onClosePopup() {
    dispatch(setIsPopupVisible(false));
  }

  return (
    <div className={`popup ${isPopupVisible && 'show'}`}>
      <button onClick={onClosePopup} className='popup__closeBtn'>
        &times;
      </button>

      <form action='' className='popup-form'>
        <input
          type='text'
          className='popup-form__input'
          placeholder='Введите testlogin'
        />
        <input
          type='password'
          className='popup-form__input'
          placeholder='Введите testpass'
        />
        <button className='popup-form__btn'>Войти</button>
      </form>
    </div>
  );
}
