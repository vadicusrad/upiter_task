import s from './Content.module.scss';
import React, { useEffect, useState } from 'react';
import CategoriesFilter from '../categoriesFilter/CategoriesFilter';

const Content = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://6230a297f113bfceed575b81.mockapi.io/database/productTest')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className={s.content}>
      <CategoriesFilter />
      <ul className={s.content_list}>
        {items &&
          items.map((item) => (
            <li key={item.id} className={s.content_item}>
              <img
                className={s.content_item_img}
                src={item.avatar}
                alt={item.title}
              />
              <button className={s.content_item_category}>
                {item.category}
              </button>
              <h2 className={s.content_item_title}>{item.title}</h2>
            </li>
          ))}
      </ul>

      <button className={s.content_btn}>LOAD MORE</button>
    </div>
  );
};

export default Content;
