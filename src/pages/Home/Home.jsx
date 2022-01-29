import React from 'react';
import './home.sass';
import { useSelector } from 'react-redux';

import helloImg from '../../img/emoticon-giving-a-hand-393.png';

export default function Home() {
  const login = useSelector((state) => state.login);

  return (
    <div className='home'>
      <section className='home-greeting'>
        <p className='home-greeting__text'>
          Привет <b>{login}</b>
        </p>
        <img
          className='home-greeting__img'
          src={helloImg}
          alt='Приветственная картинка'
        />
      </section>
    </div>
  );
}
