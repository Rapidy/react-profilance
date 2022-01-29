import React, { useState } from 'react';
import './popup.sass';
import { useSelector, useDispatch } from 'react-redux';
import { setIsPopupVisible, setLogIn } from './../../../redux/actions/mainActions';

export default function Popup() {
  const isPopupVisible = useSelector((state) => state.isPopupVisible);
  const dispatch = useDispatch();

  const userData = {
    login: 'testlogin',
    password: 'testpass',
  };

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function onClosePopup() {
    dispatch(setIsPopupVisible(false));
    setLogin('');
    setPassword('');
    setLoginError('');
    setPasswordError('');
  }

  function onLogIn() {
    if (login.trim() === '') {
      setLoginError('Заполните поле логина');
    } else if (login !== userData.login) {
      setLoginError('Вы ввели неверный логин');
    } else {
      setLoginError('');
    }

    if (password.trim() === '') {
      setPasswordError('Заполните поле пароля');
    } else if (password !== userData.password) {
      setPasswordError('Вы ввели неверный пароль');
    } else {
      setPasswordError('');
    }

    if (password === userData.password && login === userData.login) {
      dispatch(setLogIn(login));
      onClosePopup();
    }
  }

  function onLoginChange(e) {
    setLogin(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className={`popup ${isPopupVisible && 'show'}`}>
      <button onClick={onClosePopup} className='popup__closeBtn'>
        &times;
      </button>

      <div className='popup-form'>
        <div className='popup-form-item'>
          <input
            type='text'
            className='popup-form-item__input'
            placeholder='Введите testlogin'
            onChange={onLoginChange}
            value={login}
          />
          {loginError && <p className='popup-form-item__error'>{loginError}</p>}
        </div>

        <div className='popup-form-item'>
          <input
            type='password'
            className='popup-form-item__input'
            placeholder='Введите testpass'
            onChange={onPasswordChange}
            value={password}
          />
          {passwordError && <p className='popup-form-item__error'>{passwordError}</p>}
        </div>

        <button onClick={onLogIn} className='popup-form-item__btn'>
          Войти
        </button>
      </div>
    </div>
  );
}
