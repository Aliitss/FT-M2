import React from 'react';

import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div class="Nav">
      <h1 className='textoNav'> Weather App </h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
