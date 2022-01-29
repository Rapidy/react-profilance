import React, { useState } from 'react';
import './news.sass';
import NewsItem from './NewsItem/NewsItem';

export default function News() {
  const news = [
    {
      title: 'Раньше ничего не боялась',
      text: 'Россиянка 19 лет жила в тайге, где ее отчим спасался от вирусов. Как она вернулась к людям?',
      date: '12.01.2022',
    },
    {
      title: 'Он хотел сделать ее лучшей в мире',
      text: 'История россиянина, который создал и потерял одну из лучших частных школ страны',
      date: '14.01.2022',
    },
    {
      title: 'Хороший полицейский',
      text: 'Как комедийный хит ТНТ «Девушки с Макаровым» привносит юмор в жанр ментовского сериала',
      date: '17.01.2022',
    },
    {
      title: 'Музыка это мой второй язык',
      text: 'В Петербургской филармонии при поддержке «Роснефти» выступит Зубин Мета',
      date: '19.01.2022',
    },
    {
      title: 'Счет идет на дни',
      text: 'Омикрон начал вытеснять дельта-штамм коронавируса. Чем это грозит россиянам?',
      date: '22.01.2022',
    },
    {
      title: 'Зерна катастрофы',
      text: 'Глобальное потепление угрожает существованию кофе. Что будут пить по утрам миллионы людей?',
      date: '25.01.2022',
    },
  ];

  const [search, setSearch] = useState('');

  function onChangeSearch(e) {
    setSearch(e.target.value);
  }

  const filteredNews =
    search.trim() !== ''
      ? news.filter((item) => {
          const newsText = `${item.title} ${item.text}`;
          return newsText.toLowerCase().includes(search.toLowerCase());
        })
      : news;

  return (
    <div className='news'>
      <section className='news-search'>
        <div className='news-search-wrapper'>
          <input
            className='news-search-wrapper__input'
            placeholder='Что будем искать?'
            onChange={onChangeSearch}
            value={search}
          />
        </div>
      </section>

      <section className='news-content'>
        {filteredNews.length !== 0 ? (
          filteredNews.map((item, i) => (
            <NewsItem key={i} title={item.title} text={item.text} date={item.date} />
          ))
        ) : (
          <h3 className='news-content__error'>По вашему запросу ничего не найдено</h3>
        )}
      </section>
    </div>
  );
}
