import React from 'react';
import s from './CategoriesFilter.module.scss';

const CategoriesFilter = () => {
  return (
    <div className={s.categoriesFilter}>
      <ul className={s.categoriesFilter_list}>
        <li className={s.categoriesFilter_list_item}>Show All</li>
        <li className={s.categoriesFilter_list_item}>Design</li>
        <li className={s.categoriesFilter_list_item}>Branding</li>
        <li className={s.categoriesFilter_list_item}>Illustration</li>
        <li className={s.categoriesFilter_list_item}>Motion</li>
      </ul>
      <select className={s.categoriesFilter_select} name='cars' id='cars'>
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
