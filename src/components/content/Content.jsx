import s from './Content.module.scss';
import React, { useEffect, useState } from 'react';
import CategoriesFilter from '../categoriesFilter/CategoriesFilter';

const Content = () => {
  const [items, setItems] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('Show All');

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    fetchItems();
  }, [currentFilter]);

  useEffect(() => {
    window.addEventListener('keydown', onDelHandler);
    return () => {
      window.removeEventListener('keydown', onDelHandler);
    };
  }, []);

  const onDelHandler = (e) => {
    if (e.key === 'Delete') {
      console.log(e, 'Key pressed.');
      setItems(items.filter((item) => item.target !== true));
    }
  };

  async function fetchItems() {
    try {
      await fetch(
        'https://6230a297f113bfceed575b81.mockapi.io/database/productTest'
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (currentFilter === 'Show All') {
            setItems(data);
          } else {
            setItems(data.filter((item) => item.category === currentFilter));
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  function filterCategory(currentCategory) {
    setCurrentFilter(currentCategory);
  }
  function targetElement(id) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        item.target = !item.target;
        return item;
      }
      item.target = false;
      return item;
    });
    setItems(newItems);
  }
  return (
    <div className={s.content}>
      <CategoriesFilter filterCategory={filterCategory} />
      <ul className={s.content_list}>
        {items &&
          items.map((item) => (
            <li
              onClick={() => targetElement(item.id)}
              key={item.id}
              className={s.content_item}
              style={
                item.target
                  ? { boxShadow: '0px 0px 0px 7px rgba(81, 204, 90, 1)' }
                  : null
              }
            >
              <img
                className={s.content_item_img}
                src={item.avatar}
                alt={item.title}
              />
              <button
                onClick={() => filterCategory(item.category)}
                className={s.content_item_category}
              >
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
