import React from 'react';
import './newsitem.sass';

export default function NewsItem({ key, title, text, date }) {
  return (
    <div className='news-content-item' key={key}>
      <h3 className='news-content-item__title'>{title}</h3>
      <p className='news-content-item__text'>{text}</p>
      <time className='news-content-item__date'>{date}</time>
    </div>
  );
}
