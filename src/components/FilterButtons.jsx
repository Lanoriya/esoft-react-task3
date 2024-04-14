import React from 'react';

export function FilterButtons({ handleFilter }) {
  return (
    <div className='filter-buttons'>
      <button className='btnFilter' onClick={() => handleFilter(50, 'over')}>
        Показать компетенции (больше 50%)
      </button>
      <button className='btnFilter' onClick={() => handleFilter(50, 'less')}>
        Показать компетенции (меньше 50%)
      </button>
      <button className='btnReset' onClick={() => handleFilter(null, 'reset')}>
        Показать всё
      </button>
      <button onClick={() => {localStorage.clear(); location.reload()}}>Вернуть всё</button>
    </div>
  );
}
