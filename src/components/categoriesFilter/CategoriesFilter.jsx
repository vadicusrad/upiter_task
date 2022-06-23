import React from 'react';
import s from './CategoriesFilter.module.scss';

const CategoriesFilter = ({ filterCategory }) => {
  return (
    <div className={s.categoriesFilter}>
      <ul className={s.categoriesFilter_list}>
        <li
          onClick={(e) => filterCategory(e.target.innerHTML)}
          className={s.categoriesFilter_list_item}
        >
          Show All
        </li>
        <li
          onClick={(e) => filterCategory(e.target.innerHTML)}
          className={s.categoriesFilter_list_item}
        >
          Design
        </li>
        <li
          onClick={(e) => filterCategory(e.target.innerHTML)}
          className={s.categoriesFilter_list_item}
        >
          Branding
        </li>
        <li
          onClick={(e) => filterCategory(e.target.innerHTML)}
          className={s.categoriesFilter_list_item}
        >
          Illustration
        </li>
        <li
          onClick={(e) => filterCategory(e.target.innerHTML)}
          className={s.categoriesFilter_list_item}
        >
          Motion
        </li>
      </ul>
      <select
        onChange={(e) => filterCategory(e.target.value)}
        className={s.categoriesFilter_select}
        name='cars'
        id='cars'
      >
        <option value='Show All'>Show All</option>
        <option value='Design'>Design</option>
        <option value='Branding'>Branding</option>
        <option value='Illustration'>Illustration</option>
        <option value='Motion'>Motion</option>
      </select>
      <span className={s.categoriesFilter_select_arrow}>▼</span>
    </div>
  );
};

export default CategoriesFilter;
