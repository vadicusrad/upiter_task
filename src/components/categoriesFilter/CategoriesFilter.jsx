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
        <option value='volvo'>Show All</option>
        <option value='saab'>Design</option>
        <option value='mercedes'>Branding</option>
        <option value='audi'>Motion</option>
      </select>
      <span className={s.categoriesFilter_select_arrow}>▼</span>
    </div>
  );
};

export default CategoriesFilter;
