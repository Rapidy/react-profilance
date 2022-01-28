import React from 'react';
import './home.sass';
import { useSelector } from 'react-redux';

export default function Home() {
  const login = useSelector((state) => state.login);

  return (
    <div className='home'>
      <section className='home-greeting'>
        <p className='home-greeting__text'>
          Привет <b>{login}</b>
        </p>
      </section>
    </div>
  );
}
